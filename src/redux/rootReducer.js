import { combineReducers } from "redux";

import { searchReducer } from "../redux/search/reducers";
import { searchCurrentReducer } from "../redux/search-current-movie/reducer";

const rootReducer = combineReducers({
  movies: searchReducer,
  currentMovie: searchCurrentReducer,
});

export default rootReducer;
