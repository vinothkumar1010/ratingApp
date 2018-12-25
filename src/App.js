import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Signup from "./Signup/Signup";
import Bannercarousel from "./Movies/Bannercarousel/Bannercarousel";
import "./resources/css/App.scss";
const token = localStorage.getItem("token");
// if (token) {
//     store.dispatch({ type: AUTHENTICATE_THE_USER });
// }
const routing = (
  <Router>
    <div>
      <Header />
      {/* <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Header /> }></Route> */}
      <Route exact path="/" component={App} />
      <Route path="/Signup" component={Signup} />

      <Footer />
    </div>
  </Router>
);
class App extends Component {
  render() {
    return (
      <div>
        {routing}
        {!token ? <Signup /> : ""}
        <Bannercarousel />
      </div>
    );
  }
}

export default App;
