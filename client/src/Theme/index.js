import React from 'react';
import rtl from 'jss-rtl';
import {create} from 'jss';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import {StylesProvider, jssPreset} from '@material-ui/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b2a28'
    },
    secondary: {
      main: '#f50057'
    },
    background: {
      default: '#111111',
      paper: '#2b2a28'
    },
    text: {
      primary: '#ffffff',
      secondary: '#f50057'
    }
  },
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Amatic SC'
    ]
  }
});

export default ({children}) => (
  <StylesProvider jss={jss}>
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  </StylesProvider>
);
