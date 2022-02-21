import { combineReducers } from "redux";

import userReducer from "./user";
import usersReducer from "./users";

const allReducers = combineReducers({
  user: userReducer,
  users: usersReducer,
});

export default allReducers;
