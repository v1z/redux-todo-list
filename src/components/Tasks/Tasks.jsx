import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../../redux/actions';

export const Tasks = ({ removeTask, tasks }) => {
  const handleRemoveTask = id => () => {
    removeTask({ id });
  };

  return tasks.length === 0 ? null : (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{text}</span>
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
  tasks: state.tasks,
});

const mapDispatchToProps = {
  removeTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
