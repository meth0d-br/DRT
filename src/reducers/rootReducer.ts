import { combineReducers } from 'redux';
import { default as app } from './appReducer';
import { default as auth } from './authReducer';

const rootReducer = combineReducers({
  app,
  auth
});

export default rootReducer;
