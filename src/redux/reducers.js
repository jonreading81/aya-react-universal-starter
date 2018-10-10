import { combineReducers } from 'redux';

const blankReducer = (state = {}) => state;
const reducers = combineReducers({
  blankReducer,
});

export default reducers;
