import { combineReducers } from "redux";

import userReducer from "./components/Pages/User/functionRedux/redux";
import userArrayReducer from './components/Pages/User/functionRedux/fetchRedux'

const rootReducer = combineReducers({
  usersCount: userReducer,
  userArray: userArrayReducer
});

export default rootReducer;
