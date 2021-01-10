import { combineReducers } from "redux";

import userReducer from "./components/Pages/User/redux";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
