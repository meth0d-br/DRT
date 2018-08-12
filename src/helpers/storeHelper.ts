import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const storeHelper = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default storeHelper;
