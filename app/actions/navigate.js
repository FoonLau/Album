import * as types from './types';

export function navigate(screen) {
  return {
    type: types.NAVIGATE,
    data: { screen },
  };
}
