import React from "react";
import { useSelector } from "react-redux";

import useFetch from "../../Utils/useFetch";
import User from "./User";

function UsersList() {
  const { usersList } = useFetch();
  const countUsers = useSelector((state) => state.usersCount.usersCount);

  function name() {
    if (countUsers === 0 || usersList.length === 0) {
      return
    }
    return usersList.map((value) => (<User key={`${value.login.uuid}`} value={value} />))
  }

  return (
    <>
      <h1>UsersList</h1>
      <div className="list-wrapper borderTop">
       { name()}
      </div>
    </>
  );
}

export default UsersList;
