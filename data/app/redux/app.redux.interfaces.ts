import events from './app.redux.events';
import { CommonAction } from '../../common.data.interfaces';

export interface SetPageNumber {
  (number: number): CommonAction & SetPageNumberAction;
}

export interface SetPageNumberAction {
  type: events.SET_PAGE_NUMBER;
  payload: {
    number: number;
  },
}

export interface SetFetchError {
  (error: string): CommonAction & SetFetchErrorAction;
}

export interface SetFetchErrorAction {
  type: events.SET_FETCH_ERROR;
  payload: SetErrorPayload
}

export interface StateProcessing {
  (): CommonAction & StateProcessingAction;
}

export interface StateProcessingAction {
  type: events.SET_PROCESSING_STATE;
  payload: SetProcessingStatePayload
}

export interface SetSortQueryAction {
  type: events.SET_SORT_QUERY;
  payload: SetSortQueryPayload;
}

export interface SetSortQuery {
  (query: string): CommonAction & SetSortQueryAction;
}

export interface SetTopicQueryAction {
  type: events.SET_TOPIC_QUERY;
  payload: SetTopicQueryPayload;
}

export interface SetTopicQuery {
  (query: string): CommonAction & SetTopicQueryAction;
}

export interface SetLanguageQueryAction {
  type: events.SET_LANGUAGE_QUERY;
  payload: SetLanguageQueryPayload;
}

export interface SetLanguageQuery {
  (query: string): CommonAction & SetLanguageQueryAction;
}

export interface SetQueryAction {
  type: events.SET_QUERY;
  payload: SetQueryPayload;
}

export interface SetQuery {
  (query: string): CommonAction & SetQueryAction;
}

export interface SetQueryPayload {
  query: string;
}

export interface SetProcessingStatePayload {
  state: boolean;
}
export interface SetPageNumberPayload {
  number: number;
}
export interface SetLanguageQueryPayload extends SetQueryPayload {}
export interface SetTopicQueryPayload extends SetQueryPayload {}
export interface SetSortQueryPayload extends SetQueryPayload {}
export interface SetErrorPayload {
  error: string;
}

