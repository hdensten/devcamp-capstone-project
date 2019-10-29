import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_MOVIES, DELETE_MOVIE, ADD_MOVIE, GET_ERRORS } from "./types";

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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE MOVIE
export const deleteMovie = id => dispatch => {
  axios
    .delete(`/api/movies/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteMovie: "Movie Deleted" }));
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
      dispatch(createMessage({ addMovie: "Movie Added" }));
      dispatch({
        type: ADD_MOVIE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
