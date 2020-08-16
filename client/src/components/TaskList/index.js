import React from 'react';
import Task from '../Task';
import {Grid} from '@material-ui/core';

export default ({tasks = [], className = ''}) => {
  return (
    <Grid container spacing={1} className={className}>
      {tasks.map(task => <Task key={task.id} task={task}/>)}
    </Grid>
  )
};
