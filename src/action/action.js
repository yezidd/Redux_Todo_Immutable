import {ADD_TODO, COM_TODO, DEL_TODO, SET_FILTER} from "./actionType";

//添加todo的action
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

//删除todo的action
export function delTodo(index) {
  return {
    type: DEL_TODO,
    index: index
  }
}

//完成todo的action
export function comTodo(index) {
  return {
    type: COM_TODO,
    index: index
  }
}

//设置过滤条件
export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter: filter
  }
}