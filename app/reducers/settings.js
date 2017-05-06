import * as types from '../actions';

export default function settings(state = {}, action) {
  let nextState;

  switch (action.type) {
    case types.UPDATE_SETTING:
      nextState = Object.assign({}, state, action.data);
      break;
    default:
      nextState = state;
  }

  return nextState;
}
