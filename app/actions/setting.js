import * as types from './types';

export function updateSetting(setting) {
  return {
    type: types.UPDATE_SETTING,
    data: setting
  };
}