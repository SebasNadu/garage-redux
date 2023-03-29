import React, { Component } from "react";
import { bindActionCreator } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "React-router-dom";

import Aside from "../components/aside";
// import { removeCar } from '../actions';

class CarsShow extends Component {
  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  };

  render() {
    const car = this.props.car;
    if (!car) {
      return (
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </Aside>
      );
    }
    return [];
  }
}
