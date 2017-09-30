import {ADD_TODO, COM_TODO, DEL_TODO} from "../action/actionType";
import {List} from 'immutable'

export default function todo(state = List([]), action) {
  switch (action.type) {
    case ADD_TODO:
      return state.push({todo: action.text, completed: false});
      break;
    case DEL_TODO:
      return state.splice(action.index, 0);
      break;
    case COM_TODO:
      return state.set(action.index, {todo: state.get(action.index).todo, completed: !state.get(action.index).completed})
      break;
    default:
      return state;
  }
}