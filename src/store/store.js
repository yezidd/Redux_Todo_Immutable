import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducer';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {middlewareThunk} from "../middleware/api";

let middleware = composeWithDevTools(
  applyMiddleware(logger),
  applyMiddleware(middlewareThunk)
  // other store enhancers if any
);

const store = createStore(reducer, middleware);
export default store;