import sagaEvents from './github.saga.events';
import { GraphQLClient } from 'graphql-request';
import { StateOfReducers } from '../../rootReducer';
import { RepoData } from '../redux/github.redux.initial-state';
import { FetchRepositoriesAction } from './github.saga.interfaces';
import { takeEvery, put, getContext, select } from 'redux-saga/effects';
import { setReposData, setSearchResultInfo } from '../redux/github.redux.actions';
import { setFetchError, setPageNumber, startProcessing, stopProcessing }
  from '../../app/redux/app.redux.actioins';
import { GQLTeamRepositoryEdge, GQLRepository, GQLQuery }
  from '../../../github.schema';


function* storeRepositoryData(action: FetchRepositoriesAction) {
  try {
    yield(put(setFetchError('')));
    yield(put(startProcessing()));
    const stateOfReducers: StateOfReducers = yield select((s: StateOfReducers) => s);
    const { totalQuery, itemsPerPage, currentPage } = stateOfReducers.appReducer;
    const graphQLClient: GraphQLClient = yield getContext("graphQLClient");
    let after = undefined;
    let before = undefined;
    let first: number | undefined = itemsPerPage;
    let last = undefined;
    if (action.payload.navigationData) {
      after = action.payload.navigationData.after;
      before = action.payload.navigationData.before;
      last = action.payload.navigationData.last;
      first = action.payload.navigationData.first;
    } else {
      yield put(setPageNumber(1));
    }
    const result: GQLQuery = yield graphQLClient.request(
      require('../graphql/github.searchRepos.graphql').default,
      {
        after,
        before,
        first,
        last,
        query: totalQuery,
      },
    );
    if (result.search.edges!.length < 1) {
      throw new Error('There are no repositories for the specified query');
    }
    const { hasPreviousPage, hasNextPage, startCursor, endCursor } = result.search.pageInfo;

    yield(put(setSearchResultInfo({
      hasNextPage,
      hasPreviousPage,
      endCursor: endCursor!,
      startCursor: startCursor!,
      repositoryCount: result.search.repositoryCount,
    })));
    const reposData: RepoData[] = result!.search!.edges!.map((edge: GQLTeamRepositoryEdge) => {
      const r: GQLRepository = edge.node;
      return {
        name: r.name,
        url: r.url,
        forksCount: r.forkCount,
        starsCount: r.stargazers.totalCount,
      };
    });
    yield(put(setReposData(reposData)));
    after && (yield put(setPageNumber(currentPage + 1)));
    before && (yield put(setPageNumber(currentPage - 1)));
    yield(put(stopProcessing()));
  } catch (e) {
    yield(put(setFetchError(e.toString())));
    yield(put(stopProcessing()));
    console.error(e);
  }

}

function* watchRepositoryFetch() {
  yield takeEvery(
    [
      sagaEvents.FETCH_REPOS,
    ],
    storeRepositoryData,
  );
}

export default [
  watchRepositoryFetch(),
];
