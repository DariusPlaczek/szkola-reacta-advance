import React, { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { connect } from "react-redux";

import { loads, reset, add } from "./redux";
import User from "./User";

function UsersList(props) {
  const { users, loadValue, resetValue, addValue } = props;
  console.log(props);
  const howManyUsers = 0;
  const arr = Array(howManyUsers).fill();
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${users}`)
      .then((response) => response.json())
      .then((data) => {
          setUsersList(data.results);
          setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [users]);

  const isLoadingData = (key) => {
    return (
      <ReactPlaceholder
        key={`ph-${key}`}
        className="userlist-container placeholder"
        ready={!isLoading}
        rows={9}
        type="media"
      />
    );
  };

  return (
    <>
      <h1>UsersList</h1>
      {isError && <p className="error">An error has occurred</p>}
      <button onClick={() => loadValue()}>Load Users</button>
      <button>Reset Users</button>
      <button onClick={() => addValue()}>Add new User Users</button>

      <div className="list-wrapper borderTop">
        {isLoading && arr.map((value, key) => isLoadingData(key))}
        {usersList.map((value, id) => (
          <User key={`${value.login.uuid}`} value={value} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.usersCount.usersCount,
});

const mapDispatchToProps = (dispatch) => ({
  loadValue: () => dispatch(loads()),
  resetValue: () => dispatch(reset()),
  addValue: () => dispatch(add()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
