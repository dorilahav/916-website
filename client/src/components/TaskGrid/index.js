import React, {useMemo} from 'react';
import TaskCard from '../TaskCard';
import {Grid} from '@material-ui/core';
import TaskController from '../../controllers/Tasks';

export default ({tasks = [], className = '', onTaskClick = null, admin = false}) => {
  const taskController = useMemo(() => new TaskController(), []);
  const currentTasks = useMemo(() => admin ? tasks : taskController.filterCompletedTasks(taskController.getUnlockedTasks(tasks)), [tasks]);

  return (
    <Grid container spacing={2} className={className}  dir="rtl">
      {currentTasks.map(task => <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task)}/>)}
    </Grid>
  )
};
