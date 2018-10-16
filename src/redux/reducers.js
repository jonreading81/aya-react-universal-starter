import { combineReducers } from 'redux';
import { reducer as thunk } from 'redux-saga-thunk';
import articles from './modules/articles/reducer';
import navigation from './modules/navigation/reducer';


const reducers = combineReducers({
  articles,
  thunk,
  navigation,
});

export default reducers;
