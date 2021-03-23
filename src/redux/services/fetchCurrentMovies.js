import {
  fetchCurrentMovieRequest,
  fetchCurrentMovieSucces,
  fetchCurrentMovieFailure,
} from "../search-current-movie/action-creators";

const ApiKey = "22fb8663";

const fetchCurrentMovie = (id) => {
  return async (dispatch) => {
    dispatch(fetchCurrentMovieRequest());

    const response = await fetch(
			`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`
    );

    if (!response.ok) {
      dispatch(fetchCurrentMovieFailure());
      throw new Error(`Couldn't fetch this url , status ${response.status}`);
    }

    const data = await response.json();
    dispatch(fetchCurrentMovieSucces(data));
  };
};

export default fetchCurrentMovie;
