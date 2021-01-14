import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadUser, resetUser, addUser } from "../User/redux";

function Home() {
  const dispatch = useDispatch();
  const countUsers = useSelector((state) => state.usersCount.usersCount);

  return (
    <>
      <h1>Home</h1>
      <div className="users-button-container">
        <button onClick={() => dispatch(loadUser())}>Load</button>
        <button onClick={() => dispatch(resetUser())}>Reset</button>
        <button onClick={() => dispatch(addUser())}>Add</button>
      </div>
      <div>Users Count: {countUsers}</div>
    </>
  );
}

export default Home;
