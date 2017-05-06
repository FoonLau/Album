import * as types from '../actions/types';

export default function photos(state = {}, action) {
  let nextState;

  switch (action.type) {
    case types.ADD_PHOTO:
      nextState = Object.assign({}, state, { [action.data.id]: action.data });
      break;
    case types.DELETE_PHOTO:
    case types.EXPORT_PHOTO:
      nextState = Object.assign({}, state);
      delete nextState[action.data.id];
      break;
    case types.MOVE_PHOTO:
      nextState = Object.assign({}, state);
      nextState[action.data.id].album = action.data.album;
      break;
    default:
      nextState = state;
  }

  return nextState;
}
