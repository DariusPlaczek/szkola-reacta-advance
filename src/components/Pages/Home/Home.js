import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SingleMessage from '../Message/SingleMessage'
import { loadUser, addUser, resetUser } from "../User/redux";


function Home() {
  const dispatch = useDispatch();
  const countUsers = useSelector((state) => state.usersCount.usersCount);
  const messages = useSelector((state) => state.messageForm.messages)

  return (
    <>
      <h1>Home</h1>
      <div className="users-button-container">
        <button onClick={() => dispatch(loadUser())}>Load</button>
        <button onClick={() => dispatch(resetUser())}>Reset</button>
        <button onClick={() => dispatch(addUser())}>Add</button>
      </div>
      <div className="users-count">Users Count: {countUsers}</div>

      <SingleMessage messages={messages} />
    </>
  );
}

export default Home;
