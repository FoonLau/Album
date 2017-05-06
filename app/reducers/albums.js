import * as types from '../actions';

export default function albums(state = {}, action) {
  let nextState;

  switch (action.type) {
    case types.ADD_ALBUM:
      nextState = Object.assign({}, state, { [action.data.id]: action.data });
      break;
    case types.DELETE_ALBUM:
      nextState = Object.assign({}, state);
      delete nextState[action.data.id];
      break;
    default:
      nextState = state;
  }

  return nextState;
}
