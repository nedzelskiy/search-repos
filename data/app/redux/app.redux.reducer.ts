import clone from 'clone';
import events from '../../app/redux/app.redux.events';
import { CommonAction } from '../../common.data.interfaces';
import initialState, { State } from './app.redux.initial-state';
import {
  SetErrorPayload,
  SetQueryPayload,
  SetSortQueryPayload,
  SetTopicQueryPayload,
  SetPageNumberPayload,
  SetLanguageQueryPayload,
  SetProcessingStatePayload,
} from './app.redux.interfaces';

export default (state: State = initialState, action: CommonAction): State => {
  const newState: State = clone(state);
  switch (action.type) {
    case events.SET_QUERY: {
      const { query } = <SetQueryPayload>action.payload;
      newState.query = query;
      break;
    }

    case events.SET_LANGUAGE_QUERY: {
      const { query } = <SetLanguageQueryPayload>action.payload;
      newState.languageQuery = query;
      break;
    }

    case events.SET_SORT_QUERY: {
      const { query } = <SetSortQueryPayload>action.payload;
      newState.sortQuery = query;
      break;
    }

    case events.SET_TOPIC_QUERY: {
      const { query } = <SetTopicQueryPayload>action.payload;
      newState.topicQuery = query;
      break;
    }

    case events.SET_PROCESSING_STATE: {
      const { state } = <SetProcessingStatePayload>action.payload;
      newState.isProcessing = state;
      break;
    }

    case events.SET_FETCH_ERROR: {
      const { error } = <SetErrorPayload>action.payload;
      newState.fetchError = error;
      break;
    }

    case events.SET_PAGE_NUMBER: {
      const { number } = <SetPageNumberPayload>action.payload;
      newState.currentPage = number;
      break;
    }

    default:
      break;
  }

  newState.totalQuery = getTotalQuery(newState);

  return newState;
}

const getTotalQuery = (s: State): string => {
  return `${s.query} ${s.languageQuery} ${s.topicQuery} ${s.sortQuery}`
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
};
