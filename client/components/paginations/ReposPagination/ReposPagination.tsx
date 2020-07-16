import * as React from 'react';
import formatter from 'format-number';
import { useDispatch, useSelector } from 'react-redux';
import { StateOfReducers } from '../../../../data/rootReducer';
import PaginateArrow, { Direction } from '../PaginateArrow/PaginateArrow';
import { fetchRepositories } from '../../../../data/github/saga/github.saga.actions';
import './styles.scss';

const ReposPagination: React.FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const githubState = useSelector(
    (state: StateOfReducers) => state.githubReducer,
  );
  const appState = useSelector(
    (state: StateOfReducers) => state.appReducer,
  );
  const { itemsPerPage, isProcessing, currentPage } = appState;
  const { startCursor, endCursor, hasNextPage, hasPreviousPage, repositoryCount } = githubState;

  const onPreviousClickHandler = React.useCallback(
    () => {
      dispatch(fetchRepositories({
        before: startCursor,
        last: itemsPerPage,
      }));
    },
    [dispatch, startCursor]
  );
  const onNextClickHandler = React.useCallback(
    () => {
      dispatch(fetchRepositories({
        after: endCursor,
        first: itemsPerPage,
      }));
    },
    [dispatch, endCursor]
  );

  const formatRepositoryCount = React.useCallback(() => {
    return formatter({decimal: '.', integerSeparator: '.'})(repositoryCount);
  }, [repositoryCount]);

  return (
    hasPreviousPage || hasNextPage
      ? <div className="repos-pagination">
          {
            hasPreviousPage &&
            <PaginateArrow
              title="Previous Page"
              isDisable={isProcessing}
              direction={Direction.LEFT}
              onClick={onPreviousClickHandler}
            />
          }
          {
            hasNextPage &&
            <PaginateArrow
              title="Next Page"
              isDisable={isProcessing}
              direction={Direction.RIGHT}
              onClick={onNextClickHandler}
            />
          }
          {
            repositoryCount > 0 &&
            <div className="repository-count-info">
              <div>Total: <b>{formatRepositoryCount()}</b></div>
              <div>Items per page: <b>{itemsPerPage}</b></div>
              <div>Page: <b>{currentPage} / {Math.ceil(repositoryCount / itemsPerPage)}</b></div>
            </div>
          }
        </div>
      : null
  )
};

export default ReposPagination;
