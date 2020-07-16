import * as React from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux'
import { StateOfReducers } from '../../../../data/rootReducer';
import { fetchRepositories } from '../../../../data/github/saga/github.saga.actions';
import './styles.scss';

const SearchButton: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const onClickHandler = React.useCallback(
    () => {
      dispatch(fetchRepositories());
    },
    [dispatch]
  );
  const isProcessing = useSelector(
    (state: StateOfReducers) => state.appReducer.isProcessing,
  );

  return (
    <Button
      onClick={onClickHandler}
      className="search-button"
      isDisable={isProcessing}
    >
      Search
    </Button>
  );
};

export default SearchButton;
