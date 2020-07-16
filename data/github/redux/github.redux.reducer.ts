import clone from 'clone';
import events from './github.redux.events';
import { CommonAction } from '../../common.data.interfaces';
import initialState, { State } from './github.redux.initial-state';
import { SetReposDataPayload, SetSearchResultInfoPayload }
  from './github.redux.interfaces';

export default (state: State = initialState, action: CommonAction): State => {
  const newState: State = clone(state);
  switch (action.type) {
    case events.SET_REPOS_DATA: {
      const { reposData } = <SetReposDataPayload>action.payload;
      newState.reposData = reposData;
      break;
    }

    case events.SET_SEARCH_RESULT_INFO: {
      const { info } = <SetSearchResultInfoPayload>action.payload;
      newState.endCursor = info.endCursor;
      newState.startCursor = info.startCursor;
      newState.repositoryCount = info.repositoryCount;
      newState.hasPreviousPage = info.hasPreviousPage;
      newState.hasNextPage = info.hasNextPage;
      break;
    }

    default:
      break;
  }
  return newState;
}
