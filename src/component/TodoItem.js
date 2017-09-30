import React, {Component} from 'react';
import {connect} from "react-redux";
import {comTodo} from "../action/action";
import './TodoItem.css'

class TodoItem extends Component {
  toggle = () => {
    console.log(this.props.index);
    const {dispatch, index} = this.props;
    dispatch(comTodo(index));
  };

  render() {
    const completed = this.props.value.completed;
    console.log(this.props.value, "----这边就是immutbale的值")
    return (
      <div onClick={this.toggle} className={completed ? "itemLine" : "item"}>
        <p>{this.props.value.todo}</p>
      </div>
    )
  }
}

export default connect()(TodoItem)