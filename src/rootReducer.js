import { combineReducers } from "redux";

//import userReducer from "./components/Pages/User/redux";
//import userReducer from './components/Pages/User/LoadingUsers'
import userReducer from "./components/Pages/User/redux";

const rootReducer = combineReducers({
  usersCount: userReducer,
});

export default rootReducer;
