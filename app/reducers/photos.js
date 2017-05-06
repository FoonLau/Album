import * as types from '../actions/types';

export default function photos(state = {}, action) {
  let nextState;

  switch (action.type) {
    case types.ADD_PHOTO:
    case types.DELETE_PHOTO:
    case types.EXPORT_PHOTO:
    case types.MOVE_PHOTO:
      break;
    default:
      nextState = state;
  }

  return nextState;
}
