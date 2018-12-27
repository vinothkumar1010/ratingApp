import { ADD_MOVIE, GET_MOVIE_SLIDER } from "../constants/action-types";
const initialState = {
  moviesForSlider: []
};
export default (state = initialState, action) => {
  // Check if action dispatched is
  // CREATE_BOOK and act on that
  if (action.type === ADD_MOVIE) {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    });
  }
  if (action.type === GET_MOVIE_SLIDER) {
    return Object.assign({}, state, {
      moviesForSlider: state.moviesForSlider.concat(action.payload)
    });
  }
  return state;
};
