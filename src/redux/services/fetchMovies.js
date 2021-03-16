import {
  fetchRequestMovies,
  fetchSuccesMovies,
  fetchFailureMovies,
} from "../search/action-creators";

const ApiKey = "22fb8663";

const fetchMovies = (text) => {
  return async (dispatch) => {
    dispatch(fetchRequestMovies());

    console.log(text);

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${ApiKey}&s=${text}`
    );

    if (!response.ok) {
      dispatch(fetchFailureMovies());
      throw new Error(`Couldn't fetch this url , status ${response.status}`);
    }

    const data = await response.json();
    dispatch(fetchSuccesMovies(data));
  };
};

export default fetchMovies;
