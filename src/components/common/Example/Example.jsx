import React from 'react';
import { connect } from 'react-redux';
import { someAction } from '../../../redux/reducers/common';
import { string, number, func, node } from 'prop-types';
import cn from 'classnames';

import s from './Example.css';

const propTypes = {
  /** Class dropped by component's parent (BEM mixing) */
  className: string,
  /** Redux store field */
  counter: number,
  /** Redux action */
  clickHandler: func,
  children: node || string,
};

export const Example = ({ className = '', children, clickHandler, counter }) => (
  <div className={cn(s.root, className)}>
    <button type="button" onClick={clickHandler}>
      {children} {counter}
    </button>
  </div>
);

Example.propTypes = propTypes;

const mapStateToProps = state => ({
  counter: state.common.someCounter,
});

const mapDispatchToProps = {
  clickHandler: someAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
