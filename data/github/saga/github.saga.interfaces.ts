import events from './github.saga.events';
import { CommonAction } from '../../common.data.interfaces';

export interface NavigationData {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export interface FetchRepositories {
  (navigationData?: NavigationData): CommonAction & FetchRepositoriesAction;
}

export interface FetchRepositoriesAction {
  type: events.FETCH_REPOS,
  payload: {
    navigationData?: NavigationData;
  };
}
