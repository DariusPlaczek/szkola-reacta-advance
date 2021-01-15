import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SingleMessage from './SingleMessage';
import { addMessage } from "./redux";

function Messages() {
  const [messagesCache, setMessagesCache] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageForm.messages);

  function inputMessageField(event) {
    setMessagesCache(event.target.value);
  }

  return (
    <>
      <h1>Message</h1>
      <div className="message-container">
        <input
          type="text"
          placeholder="Dodaj twoj text"
          value={messagesCache}
          onChange={(event) => inputMessageField(event)}
        />
        <button onClick={() => dispatch(addMessage(messagesCache))}>Add</button>
      </div>
      {messages.map((value, id) => (
        <SingleMessage key={`messages-${id}`} message={value} />
      ))}
    </>
  );
}

export default Messages;
