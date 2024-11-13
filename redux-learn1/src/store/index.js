import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
// import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const customThunk = ({ getState, dispatch }) => {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch);
    }
    return next(action);
  };
};

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(customThunk))
);
