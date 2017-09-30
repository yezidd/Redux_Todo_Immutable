/**
 * Created by yzdd on 2017/9/30.
 */
import React, {Component} from 'react';

export default class TodoContainer extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="请输入todo数量"

        />
        <button>点击添加</button>

        <Filter/>
      </div>
    );
  }
}