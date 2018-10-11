/* eslint-disable  global-require  */
import { createStore } from 'redux';
import rootReducer from './reducers';

export default (initalState = {}) => {
  const store = createStore(rootReducer, initalState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return store;
};
