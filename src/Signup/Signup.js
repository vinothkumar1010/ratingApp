import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInp: '',
      emailInp:''
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
    <div id="signupComp">
        <input type="text" name="nameInp" id="nameInp" value={this.state.nameInp} onChange={this.handleChange}/>
        <input type="emailInp" name="emailInp" id="emailInp" value={this.state.emailInp} onChange={this.handleChange}/>
        <button type="button" id="signupBtn" name="signupBtn" onClick={this.handleClick}>Signup</button>
      </div>
    );
  }
}

export default Signup;