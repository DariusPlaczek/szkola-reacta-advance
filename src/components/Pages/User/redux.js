const FETCH_LOAD = "users/FETCH_LOAD";
const FETCH_RESET = "users/FETCH_RESET";
const FETCH_ADD = "users/FETCH_ADD";

export const loads = () => ({ type: FETCH_LOAD });
export const reset = () => ({ type: FETCH_RESET });
export const add = () => ({ type: FETCH_ADD });

const INITIAL_STATE = {
  usersCount: 1
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LOAD:
      return { ...state, usersCount: 10 };
    case FETCH_RESET:
      return { ...state, usersCount: 1 };
    case FETCH_ADD:
      return { ...state, usersCount: state.usersCount + 1 };
    default:
      return state
  }
}
