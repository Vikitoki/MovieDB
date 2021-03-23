import {
  FETCH_CURRENT_MOVIE_REQUEST,
  FETCH_CURRENT_MOVIE_SUCCES,
  FETCH_CURRENT_MOVIE_FAILURE,
} from "./action-variables";

const fetchCurrentMovieRequest = () => ({
  type: FETCH_CURRENT_MOVIE_REQUEST,
});

const fetchCurrentMovieSucces = (data) => ({
  type: FETCH_CURRENT_MOVIE_SUCCES,
  payload: data,
});

const fetchCurrentMovieFailure = () => ({
  type: FETCH_CURRENT_MOVIE_FAILURE,
});

export {
  fetchCurrentMovieRequest,
  fetchCurrentMovieSucces,
  fetchCurrentMovieFailure,
};
