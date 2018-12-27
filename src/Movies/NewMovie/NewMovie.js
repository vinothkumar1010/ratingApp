import React, { Component } from "react";

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieNameInp: ""
    };
  }
  render() {
    return <div>New Movie</div>;
  }
}
export default NewMovie;
