import events from './github.redux.events';
import { RepoData, SearchResultInfo } from './github.redux.initial-state';
import {
  SetReposData,
  SetReposDataAction,
  SetSearchResultInfo,
  SetSearchResultInfoAction
} from './github.redux.interfaces';

export const setReposData: SetReposData =
  (reposData: RepoData[]): SetReposDataAction => {
    return {
      type: events.SET_REPOS_DATA,
      payload: {
        reposData,
      },
    };
  };

export const setSearchResultInfo: SetSearchResultInfo =
  (info: SearchResultInfo): SetSearchResultInfoAction => {
    return {
      type: events.SET_SEARCH_RESULT_INFO,
      payload: {
        info,
      },
    }
  };

