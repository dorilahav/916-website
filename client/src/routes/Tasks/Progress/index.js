import React from 'react';
import {Box} from '@material-ui/core';
import ProgressBar from '../../../components/ProgressBar';

export default ({categories}) => (
  <Box display="flex" flex="1" justifyContent="space-around">
    {categories.map(category => (
      <ProgressBar key={category.id} value={category.points} maxValue={category.maxPoints} color={category.color} category={category.name}/>
    ))}
  </Box>
);