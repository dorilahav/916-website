import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Button, makeStyles} from '@material-ui/core';
import TaskGrid from '../../components/TaskGrid';
import Loadable from '../../components/Loadable';
import TaskDialog from '../../components/TaskDialog';
import {TASKS} from '../../constants';
import TaskController from '../../controllers/Tasks';

const useStyles = makeStyles({
  tasks: {
    padding: 25
  }
});

export default () => {
  const classes = useStyles();

  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(TASKS);
  const [isLoading, setLoading] = useState(true);
  
  const taskController = useMemo(() => new TaskController(), []);

  const initialize = () => {
    setLoading(false);
  };

  const pushTasks = useCallback(() => {
    const insertPromises = [];

    TASKS.forEach(task => insertPromises.push(taskController.insert(task)));

    return Promise.all(insertPromises);
  }, []);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Loadable loading={isLoading}>
      <Button onClick={pushTasks} disabled>Push All Tasks</Button>
      <TaskGrid tasks={tasks} className={classes.tasks} onTaskClick={handleTaskClick} admin/>
      <TaskDialog task={selectedTask} open={selectedTask !== null} onClose={() => setSelectedTask(null)}/>
    </Loadable>
  )
};
