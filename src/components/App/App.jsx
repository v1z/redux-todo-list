import React from 'react';
import { NewTaskForm } from '../NewTaskForm';
import { Tasks } from '../Tasks';
import { Filter } from '../Filter';

export default () => (
  <div className="col-5">
    <NewTaskForm />
    <Filter />
    <Tasks />
  </div>
);
