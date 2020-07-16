import rootSaga from '../data/rootSaga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../data/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

export default function configureStore(initialState = {}, sagaContext = {}) {
  const sagaMiddleware = createSagaMiddleware({
    context: sagaContext,
  });
  const middleware = applyMiddleware(sagaMiddleware);
  const configuredState = initialState;
  const enhancer =
    (typeof window !== 'undefined' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined')
    ? compose(middleware, (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    : middleware;
  const store = createStore(rootReducer, configuredState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
