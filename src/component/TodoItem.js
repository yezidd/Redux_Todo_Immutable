import React, {Component} from 'react';

export default class TodoItem extends Component {
  toggle = () => {
    console.log("测试")
  };

  render() {
    return (
      <div onClick={this.toggle}>

      </div>
    )
  }
}