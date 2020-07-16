import events from './github.saga.events';
import { FetchRepositories, FetchRepositoriesAction, NavigationData }
  from './github.saga.interfaces';

export const fetchRepositories: FetchRepositories =
  (navigationData?: NavigationData): FetchRepositoriesAction => {
    return {
      type: events.FETCH_REPOS,
      payload: {
        navigationData,
      },
    };
  };


