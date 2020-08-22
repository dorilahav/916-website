import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import ProgressBar from '../../../components/ProgressBar';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 25
  }
}));

export default ({categories}) => {
  const classes = useStyles();

  console.log(categories);

  return (
    <Box display="flex" justifyContent="space-around" className={classes.root}>
      {categories.map(category => (
        <ProgressBar key={category.id} value={category.points} maxValue={category.maxPoints} color={category.color} category={category.name}/>
      ))}
    </Box>
  );
};