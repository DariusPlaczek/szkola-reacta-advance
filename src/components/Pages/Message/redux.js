const ADD_MESSAGE = "message/ADD_MESSAGE";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

const INITIAL_STATE = {
  messages: ["Ucze sie Reacta!", "ale nadal nic nie umiem"],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
}
