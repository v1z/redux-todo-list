import { combineReducers } from 'redux';
// import { reduceReducers } from '../../utils/scripts/reduceReducers';
import { tasks } from './tasks';
import { text } from './text';

const combinedReducer = combineReducers({
  tasks,
  text,
});

// export default reduceReducers(combinedReducer);
export default combinedReducer;
