import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const text = handleActions(
  {
    [actions.updateNewTaskText](
      _,
      {
        payload: { text },
      }
    ) {
      return text;
    },
    [actions.addTask](_) {
      return '';
    },
  },
  ''
);
