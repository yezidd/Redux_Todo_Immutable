import React, {Component} from 'react';

export default class TodoItem extends Component {
  toggle = () => {
    console.log("测试")
  };

  render() {
    console.log(this.props.value, "----这边就是immutbale的值")
    return (
      <div onClick={this.toggle}>
        <p>{this.props.value.todo}</p>
      </div>
    )
  }
}