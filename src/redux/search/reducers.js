import {
  SEARCH_MOVIE,
  REQUEST_FETCH_MOVIES,
  SUCCES_FETCH_MOVIES,
  FAILURE_FETCH_MOVIES,
} from "./action-variables";

const initialState = {
  text: "",
  loading: false,
  moviesList: [],
  error: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case SUCCES_FETCH_MOVIES:
      return {
        ...state,
        moviesList: action.payload,
        loading: false,
        text: "",
      };
    case FAILURE_FETCH_MOVIES:
      return {
        ...state,
        loading: false,
        moviesList: [],
        error: true,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        loading: false,
        text: action.payload,
      };

    default:
      return state;
  }
};
