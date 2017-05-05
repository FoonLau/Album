import * as types from '../actions/types'

export default function currentScreen(state = 'redTab', action) {
  if (action.type === types.NAVIGATE) {
    return action.data.nextScreen;
  } else {
    return state;
  }
}