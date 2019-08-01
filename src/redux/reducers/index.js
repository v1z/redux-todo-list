import { combineReducers } from 'redux';
import { reducer as common } from './common';
import { reduceReducers } from '../../utils/scripts/reduceReducers';

const combinedReducer = combineReducers({
  common,
});

export default reduceReducers(combinedReducer);
