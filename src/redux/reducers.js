import { combineReducers } from 'redux';
import { reducer as thunk } from 'redux-saga-thunk';
import articles from './modules/articles/reducer';

const reducers = combineReducers({
  articles,
  thunk,
});

export default reducers;
