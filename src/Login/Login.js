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
  handleKeyPress = (e) => {
    console.log("KeyPress event")
    if (e.key === 'Enter') {
      this.handleClick(e);
    }
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
          placeholder="abc@abc.com"
          value={this.state.email}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="password"
          name="passwordInp"
          id="passwordInp"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
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
