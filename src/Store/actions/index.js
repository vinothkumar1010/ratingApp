import ADD_MOVIE from "../constants/action-types";
export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}
