import React from "react";

function SingleMessage(props) {
  const { message } = props;
  return <div className="single-container">{message}</div>;
}

export default SingleMessage;
