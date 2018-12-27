import React, { Component } from "react";
import "./Signup.scss";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInp: "",
      emailInp: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
    console.log(this.state);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div id="signupComp">
        <div>
          <label htmlFor="nameInp">Name</label>
          <input
            type="text"
            name="nameInp"
            id="nameInp"
            placeholder="Your name"
            value={this.state.nameInp}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="emailInp">Email</label>
          <input
            type="emailInp"
            name="emailInp"
            id="emailInp"
            placeholder="Your email"
            value={this.state.emailInp}
            onChange={this.handleChange}
          />
        </div>

        <button
          type="button"
          id="signupBtn"
          name="signupBtn"
          onClick={this.handleClick}
        >
          Signup
        </button>
      </div>
    );
  }
}

export default Signup;
