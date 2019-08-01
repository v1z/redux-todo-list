import React from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTaskState } from '../../redux/actions';
import { filteredTasksSelector } from '../../redux/selectors';

export const Tasks = ({ removeTask, toggleTaskState, tasks }) => {
  const handleRemoveTask = id => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = id => () => {
    toggleTaskState({ id });
  };

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text, state }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">
              <button type="button" className="btn btn-link" onClick={handleToggleTaskState(id)}>
                {state === 'active' ? text : <s>{text}</s>}
              </button>
            </span>
            <button type="button" className="close" onClick={handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: filteredTasksSelector(state),
});

const mapDispatchToProps = {
  removeTask,
  toggleTaskState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
