import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieSlider } from "../../Store/actions/index";
import "./BannerCarousel.scss";
const mapStateToProps = state => {
  return { sliderMovies: state.movies.moviesForSlider };
};

class Bannercarousel extends Component {
  componentWillMount() {
    this.props.getMovieSlider();
  }
  createSlider() {
    const movieDetailInfo = this.props.sliderMovies.map(movieDetail => (
      <div
        className="carouselMovie"
        style={{
          backgroundImage: `url(${movieDetail.poster})`
        }}
        key={movieDetail.id}
      >
        {movieDetail.name}
        <img src={movieDetail.poster} alt={movieDetail.name} />
      </div>
    ));
    return movieDetailInfo;
  }
  render() {
    return <div id="bannerCarouselComp">{this.createSlider()}</div>;
  }
}

export default connect(
  mapStateToProps,
  { getMovieSlider }
)(Bannercarousel);
