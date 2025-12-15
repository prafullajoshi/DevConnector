import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";

export default combineReducers({
  // Add your reducers here
  alert,
  auth,
});
