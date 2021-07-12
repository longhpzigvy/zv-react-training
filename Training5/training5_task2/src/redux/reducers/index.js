import { combineReducers } from "redux";
import authorization from "./authorization";
import users from "./users";

const rootReducer = combineReducers({
  authorization,
  users,
});

export default rootReducer;
