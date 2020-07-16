import * as React from 'react';
import Sort from '../selects/Sort/Sort';
import { useSelector } from 'react-redux';
import ReposTable from '../tables/ReposTable/ReposTable';
import QueryInput from '../inputs/QueryInput/QueryInput';
import { StateOfReducers } from '../../../data/rootReducer';
import TopicSelect from '../selects/TopicSelect/TopicSelect';
import SearchButton from '../buttons/SearchButton/SearchButton';
import LanguageSelect from '../selects/LanguageSelect/LanguageSelect'
import ReposPagination from '../paginations/ReposPagination/ReposPagination';
import './styles.scss';

const App: React.FC = (): JSX.Element => {
  const state = useSelector(
    (state: StateOfReducers) => state.appReducer,
  );

  const { totalQuery, fetchError } = state;

  return (
    <div className="app">
      <label htmlFor="language">Filter by language</label>
      <LanguageSelect id="language" />
      <label htmlFor="topic">Filter by topic</label>
      <TopicSelect id="topic" />
      <label htmlFor="sort">Sort:</label>
      <Sort id="sort" />
      <label htmlFor="query">Query:</label>
      <QueryInput id="query" />
      <div className="search-query-result">Result search query is: <pre>{totalQuery}</pre></div>
      <div className="button-area">
        <SearchButton>Search</SearchButton>
      </div>
      {fetchError
        ? <div className="fetch-error">{fetchError}</div>
        : <>
            <ReposPagination />
            <ReposTable />
            <ReposPagination />
          </>
      }
    </div>
  );
};

export default App;
