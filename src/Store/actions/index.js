import { ADD_MOVIE, GET_MOVIE_SLIDER } from "../constants/action-types";
import axios from "axios";
import { Properties } from "../../Properties";
const apiURL = Properties.apiURL + "movies/";
export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}
export const movieSlider = payload => {
  //Arrow function used here..for learning purpose
  return {
    type: GET_MOVIE_SLIDER,
    payload
  };
};

export function getMovieSlider() {
  return function(dispatch) {
    return axios.get(apiURL + "movieslider").then(res => {
      dispatch({ type: GET_MOVIE_SLIDER, payload: res.data });
    });
  };
}
