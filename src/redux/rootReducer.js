import { combineReducers } from "redux";

import {searchReducer} from "../redux/search/reducers";

const rootReducer = combineReducers({
  movies: searchReducer,
});

export default rootReducer;
