import React from 'react';
import {Typography, Box, CircularProgress, makeStyles} from '@material-ui/core';

const useStyles = (color) => makeStyles({
  progress: {
    color
  },
  text: {
    color
  }
})();

export default ({progress, color}) => {
  const classes = useStyles(color);

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" className={classes.progress} value={progress}/>
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
        <Typography variant="subtitle1" component="div" className={classes.text}>{progress}%</Typography>
      </Box>
    </Box>
  );
}