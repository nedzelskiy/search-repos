import events from './github.redux.events';
import { CommonAction } from '../../common.data.interfaces';
import { RepoData, SearchResultInfo } from './github.redux.initial-state';

export interface SetSearchResultInfo {
  (info: SearchResultInfo): CommonAction & SetSearchResultInfoAction;
}

export interface SetSearchResultInfoAction {
  type: events.SET_SEARCH_RESULT_INFO;
  payload: SetSearchResultInfoPayload;
}

export interface SetReposDataAction {
  type: events.SET_REPOS_DATA;
  payload: SetReposDataPayload;
}

export interface SetReposData {
  (reposData: RepoData[]): CommonAction & SetReposDataAction;
}

export interface SetReposDataPayload {
  reposData: RepoData[];
}
export interface SetSearchResultInfoPayload {
  info: SearchResultInfo;
}
