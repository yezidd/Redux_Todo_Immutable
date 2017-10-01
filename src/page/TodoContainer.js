/**
 * Created by yzdd on 2017/9/30.
 */
import React, {Component} from 'react';
import Filter from "../component/Filter";
import TodoItem from "../component/TodoItem"
import {connect} from "react-redux";
import {addTodo} from "../action/action";
import {VisibilityFilters} from "../action/actionType";

class TodoContainer extends Component {
  add = () => {
    console.log(this.refs.todo.value)
    this.props.dispatch(addTodo(this.refs.todo.value));
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          placeholder="请输入todo数量"
          ref="todo"

        />
        <button onClick={this.add}>点击添加</button>
        {
          this.props.todo.map((v, i) => <TodoItem key={i} value={v} index={i}/>)
        }
        <Filter/>
      </div>
    );
  }
}

function selectTodo(todo, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todo;
      break;
    case VisibilityFilters.SHOW_COMPLETED:
      return todo.filter((v, i) => v.completed === true);
      break;
    case VisibilityFilters.SHOW_ACTIVE:
      return todo.filter((v, i) => v.completed === false);
      break;
    default:
      return todo;
  }
}

function select(state) {
  console.log(state, "----这边是state")
  return {
    todo: selectTodo(state.get("todo"), state.get('filter')),
    filter: state.get("filter")
  }
}


export default connect(select)(TodoContainer)