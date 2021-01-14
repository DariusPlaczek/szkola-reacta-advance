const FETCH_POSTS_REQUESTED = "users/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "users/FETCH_POSTS_SUCCEDED";
const FETCH_POSTS_FAILED = "users/FETCH_POSTS_FAILED";

const INITIAL_STATE = {
  usersArray: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });
const fetchSucceded = (data) => ({ type: FETCH_POSTS_SUCCEDED, payload: data });

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());

    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSucceded(data.results));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_POSTS_SUCCEDED:
      return {
        ...state,
        usersArray: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}

