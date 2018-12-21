import React, { Component } from 'react';
import Login from '../Login/Login'
import Logo from './Logo'
import Search from '../Search/Search'

class Header extends Component {
  render() {
    return (
        <div id="headerComp">
            <Logo />
            <Search />
            <Login />
        </div>
    );
  }
}

export default Header;