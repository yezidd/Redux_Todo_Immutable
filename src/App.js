import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import TodoContainer from "./page/TodoContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoContainer/>
      </Provider>
    );
  }
}

export default App;
