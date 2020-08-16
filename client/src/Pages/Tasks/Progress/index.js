import React from 'react';
import {Box, Card} from '@material-ui/core';
import ProgressBar from '../../../components/ProgressBar';

export default ({categories}) => {
    return (
      <Box display="flex" flex="1" justifyContent="space-around">
        {categories.map(category => (
          <ProgressBar key={category.id} value={category.value} maxValue={category.maxValue} color={category.color} category={category.name}/>
        ))}
      </Box>
    )
}