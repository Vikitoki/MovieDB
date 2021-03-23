import {
  FETCH_CURRENT_MOVIE_REQUEST,
  FETCH_CURRENT_MOVIE_SUCCES,
  FETCH_CURRENT_MOVIE_FAILURE,
} from "./action-variables";

const initialState = {
  currentMovie: null,
  loadingCurrent: false,
  currentError: false,
};

const searchCurrentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_MOVIE_REQUEST:
      return {
        ...state,
        loadingCurrent: true,
      };
    case FETCH_CURRENT_MOVIE_SUCCES:
      return {
        ...state,
        loadingCurrent: false,
        currentMovie: action.payload,
      };
    case FETCH_CURRENT_MOVIE_FAILURE:
      return {
        ...state,
        loadingCurrent: false,
        currentMovie: null,
        currentError: true,
      };
    default:
      return state;
  }
};

export { searchCurrentReducer };
