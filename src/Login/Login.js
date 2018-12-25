import React, { Component } from "react";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInp: "",
      passwordInp: "",
      loggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
    console.log(this.state);
    axios
      .post("http://localhost:8080/user/authenticate", {
        email: this.state.emailInp,
        password: this.state.passwordInp
      })
      .then(res => {
        console.log(res.data.success);
        if (res.data.success === true) {
          localStorage.setItem("token", res.data.token);
          this.setState({ loggedIn: true });
          window.location.reload();
        }

        // - redirect to the route '/isauthenticated'
        // browserHistory.push('/isauthenticated');
      });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div id="loginComp">
        <input
          type="text"
          name="emailInp"
          id="emailInp"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="passwordInp"
          id="passwordInp"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button
          type="button"
          id="loginBtn"
          name="loginBtn"
          onClick={this.handleClick}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
