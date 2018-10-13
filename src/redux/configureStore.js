/* eslint-disable  global-require  */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default (initalState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initalState,
    applyMiddleware(thunkMiddleware, sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return store;
};
