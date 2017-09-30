import {combineReducers} from 'redux-immutable'
import filter from './filter'
import todos from './todos';

export default combineReducers({
  filter,
  todos
})