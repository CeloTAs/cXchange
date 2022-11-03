import { combineReducers } from "redux";
import { authActions } from "../actions";
import auth from "./auth";

const appReducer = combineReducers({
  auth,
});

const rootReducer = (state, actions) => {
  let newState = state;
  if (actions.type === authActions.LOGOUT_SUCCESS) {
    newState = {};
  }
  return appReducer(newState, actions);
};

export default rootReducer;
