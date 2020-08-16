import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import Navbar from './components/Navbar';
import Pages from './Pages';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  },
  content: {
    padding: 40,
    flex: 1
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <Navbar/>
      <Box className={classes.content}>
        <Pages/>
      </Box>
    </Box>
  )
};
