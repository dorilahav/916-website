import React, {useMemo} from 'react';
import Task from '../Task';
import {Grid} from '@material-ui/core';
import TaskController from '../../controllers/Tasks';

export default ({tasks = [], className = ''}) => {
  const taskController = useMemo(() => new TaskController(), []);
  const currentTasks = useMemo(() => taskController.filterCompletedTasks(taskController.getUnlockedTasks(tasks)), [tasks]);

  return (
    <Grid container spacing={2} className={className}  dir="rtl">
      {currentTasks.map(task => <Task key={task.id} task={task}/>)}
    </Grid>
  )
};
