import React from 'react';
import Teaser from './Teaser'
import Home from './Home';
import Tasks from './Tasks';
import Admin from './Admin';
import {BrowserRouter, Route} from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Teaser}/>
    {/* <Route exact path="/tasks" component={Tasks}/>
    <Route exact path="/admin" component={Admin}/> */}
  </BrowserRouter>
);
