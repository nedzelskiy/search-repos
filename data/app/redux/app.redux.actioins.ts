import events from './app.redux.events';
import {
  SetQuery,
  SetSortQuery,
  SetTopicQuery,
  SetFetchError,
  SetPageNumber,
  SetQueryAction,
  StateProcessing,
  SetLanguageQuery,
  SetSortQueryAction,
  SetTopicQueryAction,
  SetPageNumberAction,
  SetFetchErrorAction,
  StateProcessingAction,
  SetLanguageQueryAction
} from './app.redux.interfaces';

export const setPageNumber: SetPageNumber = (number: number): SetPageNumberAction => {
  return {
    type: events.SET_PAGE_NUMBER,
    payload: {
      number,
    },
  }
};

export const setQuery: SetQuery = (query: string): SetQueryAction => {
  return {
    type: events.SET_QUERY,
    payload: {
      query
    },
  };
};

export const setFetchError: SetFetchError = (error: string): SetFetchErrorAction => {
  return {
    type: events.SET_FETCH_ERROR,
    payload: {
      error,
    }
  };
};

export const stopProcessing: StateProcessing = (): StateProcessingAction => {
  return {
    type: events.SET_PROCESSING_STATE,
    payload: {
      state: false,
    },
  };
};

export const startProcessing: StateProcessing = (): StateProcessingAction => {
  return {
    type: events.SET_PROCESSING_STATE,
    payload: {
      state: true,
    },
  };
};

export const setLanguageQuery: SetLanguageQuery = (query: string): SetLanguageQueryAction => {
  return {
    type: events.SET_LANGUAGE_QUERY,
    payload: {
      query
    },
  };
};

export const setTopicQuery: SetTopicQuery = (query: string): SetTopicQueryAction => {
  return {
    type: events.SET_TOPIC_QUERY,
    payload: {
      query
    },
  };
};

export const setSortQuery: SetSortQuery = (query: string): SetSortQueryAction => {
  return {
    type: events.SET_SORT_QUERY,
    payload: {
      query
    },
  };
};
