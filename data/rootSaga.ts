import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import githubWatchers from './github/saga/github.saga.watchers';

export default function* rootSaga() {
  try {
    const sagas = ([] as any)
      .concat(githubWatchers);
    yield all(sagas);
  } catch (e) {
    console.log('rootSaga error:', e);
  }
}
