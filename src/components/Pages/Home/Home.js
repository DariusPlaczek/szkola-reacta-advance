import React from "react";
import { connect } from "react-redux";
import { loads, reset, add } from "../User/functionRedux/redux";
//import fetch from '../User/functionRedux/fetch'

function Home(props) {
  const { loadValue, resetValue, addValue } = props;

  return (
    <>
      <button onClick={() => loadValue()}>Load Users</button>
      <button onClick={() => resetValue()}>Reset Users</button>
      <button onClick={() => addValue()}>Add new User Users</button>
      <h1>Home</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
