import React, {Component} from 'react';
import {connect} from "react-redux";
import {VisibilityFilters} from "../action/actionType";
import {setFilter} from "../action/action";

class Filter extends Component {
  filter = (type) => {
    const {dispatch} = this.props;
    dispatch(setFilter(type));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.filter(VisibilityFilters.SHOW_ALL)}>ALL</button>

        <button onClick={() => this.filter(VisibilityFilters.SHOW_COMPLETED)}>COMPLETED</button>

        <button onClick={() => this.filter(VisibilityFilters.SHOW_ACTIVE)}>ACTIVE</button>
      </div>
    )
  }
}

export default connect()(Filter)