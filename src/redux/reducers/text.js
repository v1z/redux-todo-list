import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const text = handleActions(
  {
    [actions.addTask]() {
      return '';
    },
    [actions.updateNewTaskText](state, { payload }) {
      return payload.text;
    },
  },
  ''
);
