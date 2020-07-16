import { combineReducers, ReducersMapObject } from 'redux';
import { State as GithubState } from './github/redux/github.redux.initial-state';
import { State as AppState } from './app/redux/app.redux.initial-state';
import githubReducer from './github/redux/github.redux.reducer';
import appReducer from './app/redux/app.redux.reducer';

export interface GithubReducerState {
  githubReducer: GithubState;
}
export interface AppReducerState {
  appReducer: AppState;
}


export type StateOfReducers = GithubReducerState & AppReducerState;

const reducers: ReducersMapObject<StateOfReducers> = {
  githubReducer,
  appReducer,
};

export default combineReducers(reducers);
