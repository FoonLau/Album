import * as types from './types';

export function addAlbum(album) {
  return {
    type: types.ADD_ALBUM,
    data: album
  };
}

export function deleteAlbum(album) {
  return {
    type: types.DELETE_ALBUM,
    data: album
  };
}