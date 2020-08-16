import React from 'react';
import Home from './Home';
import Tasks from './Tasks';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/tasks" component={Tasks}/>
  </BrowserRouter>
);
