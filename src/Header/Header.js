import React, { Component } from "react";
import Login from "../Login/Login";
import Logo from "./Logo";
import Welcome from "../welcome/welcome";
import Search from "../Search/Search";
import "./header.scss";
const token = localStorage.getItem("token");
class Header extends Component {
  render() {
    return (
      <div id="headerComp">
        <Logo />
        <Search />
        {!token ? <Login /> : <Welcome />}
      </div>
    );
  }
}

export default Header;
