import React, { Component } from "react";
import ReCAPTCHA  from 'react-google-recaptcha'
import axios from "axios";
import "./Signup.scss";
const recaptchaRef = React.createRef();
class Signup extends Component {
  componentWillMount()
  {
    console.log(process.env.REACT_APP_API_URL);
  }
  constructor(props) {
    super(props);
    this.state = {
      nameInp: "",
      emailInp: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);  
  }
  /* componentDidMount() {
    loadReCaptcha();
  } */
  handleClick() {
    
    console.log(this.state);

    recaptchaRef.current.execute();
    axios
      .post(process.env.REACT_APP_API_URL+"/user/createAccount", {
        email: this.state.emailInp,
        name: this.state.nameInp
      })
      .then(res => {
        console.log(res.data.success);
        if (res.data.success === true) {
         console.log("user inserted")
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
        <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey={process.env.REACT_APP_CAPTCHA}
    />
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
