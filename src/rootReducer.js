import { combineReducers } from "redux";

import userReducer from "./components/Pages/User/redux";
import fetchReducer from './components/Utils/ReduxStore/fetchRedux'

const rootReducer = combineReducers({
  usersCount: userReducer,
  fetchArray: fetchReducer

});

export default rootReducer;
