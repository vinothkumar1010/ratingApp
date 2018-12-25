import React, { Component } from "react";
import { connect } from "react-redux";

class Bannercarousel extends Component {
  render() {
    const moviecarousel = this.props.movies.map((movie, i) => (
      <li key={i}>{movie.name}</li>
    ));
    return <div>{moviecarousel}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { movies: state.movies };
};
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bannercarousel);
