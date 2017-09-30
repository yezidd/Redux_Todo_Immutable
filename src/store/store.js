import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducer';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

let middleware = composeWithDevTools(
  applyMiddleware(logger),
  // other store enhancers if any
);

const store = createStore(reducer, middleware);
export default store;