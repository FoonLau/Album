import * as types from './types';

export function addPhoto(photo) {
  return {
    type: types.ADD_PHOTO,
    data: photo
  };
}

export function deletePhoto(photo) {
  return {
    type: types.DELETE_PHOTO,
    data: photo
  };
}

export function exportPhoto(photo) {
  return {
    type: types.EXPORT_PHOTO,
    data: photo
  };
}

export function movePhoto(photo) {
  return {
    type: types.MOVE_PHOTO,
    data: photo
  };
}