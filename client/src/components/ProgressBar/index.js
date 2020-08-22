import React, {useState, useEffect} from 'react';
import LabeledProgress from './LabeledProgress';
import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  text: {
    marginLeft: 10
  }
}));

export default ({value, maxValue, color, category}) => {
  const classes = useStyles();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.round((value / maxValue) * 100));
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex="1">
      <Typography variant="h4" className={classes.text}>{category}</Typography>
      <LabeledProgress progress={progress} color={color}/>
    </Box>
  );
};