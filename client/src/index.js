import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './Theme';
import App from './App';
import {CssBaseline} from '@material-ui/core';

ReactDOM.render((
  <Theme>
    <CssBaseline/>
    <App />
  </Theme>
), document.getElementById('container'));
