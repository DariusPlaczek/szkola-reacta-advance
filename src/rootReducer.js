import { combineReducers } from "redux";


import userReducer from "./components/Pages/User/redux";
import fetchReducer from "./components/Utils/ReduxStore/fetchRedux";
import messageReducer from './components/Pages/Message/redux';

const rootReducer = combineReducers({
  usersCount: userReducer,
  fetchArray: fetchReducer,
  messageForm: messageReducer
});

export default rootReducer;
