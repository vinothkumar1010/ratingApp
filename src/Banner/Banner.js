import React, { Component } from "react";
import Bannercarousel from "../Movies/Bannercarousel/Bannercarousel";
import Signup from "../Signup/Signup";

import "./Banner.scss";
const token = localStorage.getItem("token");
class Header extends Component {
  render() {
    return (
      <div id="bannerComp">
        <Bannercarousel />
        {!token ? <Signup /> : ""}
      </div>
    );
  }
}

export default Header;
