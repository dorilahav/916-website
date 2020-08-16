import React from 'react';
import Task from '../Task';
import {Grid} from '@material-ui/core';

export default ({tasks = []}) => {
  return (
    <Grid container spacing={2}>
      {tasks.map(task => <Task key={task._id} task={task}/>)}
    </Grid>
  )
};
