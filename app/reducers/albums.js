import * as types from '../actions';

export default function albums(state = {}, action) {
  let nextState;

  switch (action.type) {
    case types.ADD_ALBUM:
    case types.DELETE_ALBUM:
      break;
    default:
      nextState = state;
  }

  return nextState;
}
