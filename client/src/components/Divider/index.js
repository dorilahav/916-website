import React from 'react';
import {Divider, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: '3px 0'
  }
});

export default () => {
  const classes = useStyles();

  return (
    <Divider className={classes.root} />
  );
}