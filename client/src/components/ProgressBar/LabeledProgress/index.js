import React from 'react';
import {Typography, Box, CircularProgress, makeStyles} from '@material-ui/core';

const useStyles = (color) => makeStyles({
  root: {
    transition: 'transform 200ms ease',
    cursor: 'default',
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  progressRoot: {
    color
  },
  progressCircle: {
    transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  text: {
    color
  }
})();

export default ({progress, color}) => {
  const classes = useStyles(color);

  return (
    <Box className={classes.root} position="relative" display="inline-flex">
      <CircularProgress variant="static" classes={{root: classes.progressRoot, circle: classes.progressCircle}} value={progress} size="60px" />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5" component="div" className={classes.text}>{progress}%</Typography>
      </Box>
    </Box>
  );
}