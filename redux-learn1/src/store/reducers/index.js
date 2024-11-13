import { combineReducers } from "redux";
import CounterReducer from "./Counter";
import product from "./Product";
import status from "./Status";

export default combineReducers({
  counter: CounterReducer,
  product,
  status,
});
