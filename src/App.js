import React, { Component } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Signup from './Signup/Signup'
import './resources/css/App.scss';

class App extends Component {
  render() {
    return (
       <div> 
          <Header />
          <Signup />
          <Footer />
      </div>
    );
  }
}

export default App;
