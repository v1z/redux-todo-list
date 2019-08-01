import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const tasks = handleActions(
  {
    [actions.addTask](
      state,
      {
        payload: { task },
      }
    ) {
      return [task, ...state];
    },
    [actions.removeTask](
      state,
      {
        payload: { id },
      }
    ) {
      return state.filter(t => t.id !== id);
    },
  },
  []
);
