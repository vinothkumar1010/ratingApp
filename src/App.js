import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
//import { browserHistory } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Signup from "./Signup/Signup";
import "./resources/css/App.scss";
import NewMovie from "./Movies/NewMovie/NewMovie";
import Banner from "./Banner/Banner";
// if (token) {
//     store.dispatch({ type: AUTHENTICATE_THE_USER });
// }
const routing = (
  <Router>
    <div>
      <Header />
      {/* <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Header /> }></Route> */}
      <Route path="/Signup" component={Signup} />
      <Route path="/NewMovie" component={NewMovie} />
      <Footer />
    </div>
  </Router>
);
class App extends Component {
  render() {
    return (
      <div>
        {routing}
        <Banner />
      </div>
    );
  }
}

export default App;
