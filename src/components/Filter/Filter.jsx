import React from 'react';
import { connect } from 'react-redux';
import { setTasksFilter } from '../../redux/actions';

const FILTERS = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

export const Filter = ({ setTasksFilter, currentFilterName }) => {
  const handleSetTasksFilter = filterName => {
    setTasksFilter({ filterName });
  };

  const renderFilter = ([state, name]) => {
    if (currentFilterName === state) {
      return name;
    }

    return (
      <button
        type="button"
        key={state}
        className="btn btn-link border-0 p-0"
        onClick={() => handleSetTasksFilter(state)}
      >
        {name}
      </button>
    );
  };

  return <div className="mt-3 d-flex justify-content-around">{FILTERS.map(renderFilter)}</div>;
};

const mapStateToProps = state => ({
  currentFilterName: state.tasks.currentFilterName,
});

const mapDispatchToProps = {
  setTasksFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
