import * as actionTypes from './actionTypes';

export function taskComleted(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, comleted: true },
  };
}

export function titleChange(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
}

export function taskDelete(id) {
  return {
    type: actionTypes.taskDelete,
    payload: { id },
  };
}
