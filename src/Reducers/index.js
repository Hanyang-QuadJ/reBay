import { combineReducers } from "redux";

import DefaultReducer from "./DefaultReducer";
import LoginReducer from "./LoginReducer";
import BrandReducer from "./BrandReducer";
import BaseketReducer from "./BasketReducer";
import ItemReducer from "./ItemReducer";
import RecommendReducer from "./RecommendReducer";
import SearchReducer from "./SearchReducer";
import LogReducer from "./LogReducer";

const Reducer = combineReducers({
  DefaultReducer,
  LoginReducer,
  BrandReducer,
  BaseketReducer,
  ItemReducer,
  RecommendReducer,
  SearchReducer,
  LogReducer
});
export default Reducer;
