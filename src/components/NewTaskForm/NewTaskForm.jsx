import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { updateNewTaskText, addTask } from '../../redux/actions';

export const NewTaskForm = ({ text, updateNewTaskText, addTask }) => {
  const handleAddTask = e => {
    e.preventDefault();
    const task = { text, id: _.uniqueId(), state: 'active' };
    addTask({ task });
  };

  const handleUpdateNewTaskText = e => {
    updateNewTaskText({ text: e.target.value });
  };

  return (
    <form className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input type="text" required value={text} onChange={handleUpdateNewTaskText} />
      </div>
      <input type="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

const mapStateToProps = state => ({
  text: state.text,
});

const mapDispatchToProps = {
  updateNewTaskText,
  addTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);
