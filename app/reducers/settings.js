import * as types from '../actions';

export default function settings(state = {}, action) {
  let nextState;

  switch (action.type) {
    case types.UPDATE_SETTING:
      break;
    default:
      nextState = state;
  }

  return nextState;
}
