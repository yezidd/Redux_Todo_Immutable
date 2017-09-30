import {SET_FILTER} from "../action/actionType";

export default function filter(state = "ALL", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
      break;
    default:
      return state;
      break;
  }
}