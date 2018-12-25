import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    return (
      <div>
        Welcome
        <button onClick={this.handleClick} type="button">
          Logout
        </button>
      </div>
    );
  }
}
export default withRouter(Welcome);
