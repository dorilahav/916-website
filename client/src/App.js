import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import Navbar from './components/Navbar';
import Routes from './routes';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  },
  content: {
    padding: 25
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <Navbar/>
      <Box className={classes.content} display="flex" flexDirection="column" overflow="auto" flex="1">
        <Routes/>
      </Box>
    </Box>
  )
};
