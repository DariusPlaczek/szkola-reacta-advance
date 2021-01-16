import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import SingleMessage from "./SingleMessage";
import { addMessage } from "./redux";

function Messages() {
  const [messagesCache, setMessagesCache] = useState("");
  const [selectCache, setSelectCache] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageForm.messages);

  function inputMessageField(event) {
    event.preventDefault();
    setMessagesCache(event.target.value);
  }

  function selectMessage(event) {
    setSelectCache(event.target.value);
  }

  return (
    <>
      <h1>Message</h1>
      <div className="message-container">
        <form>
          <input
            type="text"
            placeholder="Dodaj twoj text"
            value={messagesCache}
            onChange={(event) => inputMessageField(event)}
          />
          <select onChange={(event) => selectMessage(event)}>
            <option value="#DDDDDD">info</option>
            <option value="#f0da50">warning</option>
            <option value="#e92b2c">danger</option>
          </select>
        </form>
        <button onClick={() => dispatch(addMessage({id: uuidv4(), text: messagesCache, color:selectCache }))}>Add</button>
      </div>
        <SingleMessage messages={messages} />
    </>
  );
}

export default Messages;
