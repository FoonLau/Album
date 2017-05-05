import * as types from './types';

export function navigate(nextScreen, param) {
  return {
    type: types.NAVIGATE,
    data: {
      nextScreen,
      param
    }
  };
}