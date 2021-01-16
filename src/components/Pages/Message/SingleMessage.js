import React from "react";

function SingleMessage(props) {
  const { messages } = props;

  return (
    <>
      {messages.map((value, id) => (
        <div
          style={{ backgroundColor: value.color }}
          key={`messages-${id}`}
          className="single-container"
        >
          {value.text}
        </div>
      ))}
    </>
  );
}

export default SingleMessage;
