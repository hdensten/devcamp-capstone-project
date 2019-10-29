import axios from "axios";

import { GET_MOVIES, DELETE_MOVIE, ADD_MOVIE } from "./types";

// GET MOVIES
export const getMovies = () => dispatch => {
  axios
    .get("/api/movies/")
    .then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE MOVIE
export const deleteMovie = id => dispatch => {
  axios
    .delete(`/api/movies/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_MOVIE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD MOVIE
export const addMovie = movie => dispatch => {
  axios
    .post("/api/movies/", movie)
    .then(res => {
      dispatch({
        type: ADD_MOVIE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
