import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>
);
