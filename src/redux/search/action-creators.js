import {
  SEARCH_MOVIE,
  REQUEST_FETCH_MOVIES,
  SUCCES_FETCH_MOVIES,
  FAILURE_FETCH_MOVIES,
} from "./action-variables";

const searchMovie = (text) => ({
  type: SEARCH_MOVIE,
  payload: text,
});

const fetchRequestMovies = () => ({
  type: REQUEST_FETCH_MOVIES,
});

const fetchSuccesMovies = (data) => ({
  type: SUCCES_FETCH_MOVIES,
  payload: data,
});

const fetchFailureMovies = () => ({
  type: FAILURE_FETCH_MOVIES,
});

export {
  searchMovie,
  fetchRequestMovies,
  fetchSuccesMovies,
  fetchFailureMovies,
};
