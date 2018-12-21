import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
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
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
    <div id="loginComp">
        <input type="text" name="emailInp" id="emailInp" value={this.state.email} onChange={this.handleChange}/>
        <input type="passwordInp" name="passwordInp" id="passwordInp" value={this.state.password} onChange={this.handleChange}/>
        <button type="button" id="loginBtn" name="loginBtn" onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default Login;