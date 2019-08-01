import { createReducer, createAction } from 'redux-act';

// handle field complete
export const someAction = createAction('action done');

const initialState = {
  someCounter: 0,
};

export const reducer = createReducer(
  {
    [someAction]: state => ({
      ...state, // unnecessary in this case
      someCounter: state.someCounter + 1,
    }),
  },
  initialState
);
