import {combineReducers} from 'redux-immutable'
import filter from './filter'
import todo from './todos';

export default combineReducers({
  filter,
  todo
})