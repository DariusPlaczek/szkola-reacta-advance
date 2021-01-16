const ADD_MESSAGE = "message/ADD_MESSAGE";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

const INITIAL_STATE = {
  messages: [
    { id: "a775b62b-4031-43d1-9fca-eff8d769ca4f", text: "Ucze sie Reacta!", color: "#DDDDDD" },
    { id: "0b3429b8-ea8d-406f-8fa5-7f5c3b7974de", text: "ale nadal nic nie umiem", color: "#f0da50" }
  ]
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
