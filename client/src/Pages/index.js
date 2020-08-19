import React from 'react';
import Home from './Home';
import Tasks from './Tasks';
import Admin from './Admin';
import {BrowserRouter, Route} from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/tasks" component={Tasks}/>
    <Route exact path="/admin" component={Admin}/>
  </BrowserRouter>
);
