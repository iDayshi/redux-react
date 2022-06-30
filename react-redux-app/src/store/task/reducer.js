import { taskDelete, taskUpdated } from './actionTypes';

export function taskReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      return newArray;
    }
    case taskDelete: {
      return state.filter((el) => el.id !== action.payload.id);
    }
    default:
      return state;
  }
}
