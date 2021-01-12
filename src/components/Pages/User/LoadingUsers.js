const USERDATA_FETCH = 'users/USERDATA_FETCH';
const USERDATA_RESET = 'users/USERDATA_RESET';

export const FETCH = () => ({
  type: USERDATA_FETCH
})

export const RESET = () => ({
  type: USERDATA_RESET
})

const INITIAL_STATE = {
  users: []
}


export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERDATA_FETCH:
      return{
        ...state, users:10
      }
    case USERDATA_RESET:
        console.log('RESET');
        break;
    default:
      return state;
  }
}