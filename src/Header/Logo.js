import React, { Component } from "react";
import logo from "../resources/images/logo.png";
import "./logo.scss";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="rating app" />
      </div>
    );
  }
}

export default Logo;
