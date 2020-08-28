import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Button, makeStyles} from '@material-ui/core';
import TaskGrid from '../../components/TaskGrid';
import Loadable from '../../components/Loadable';
import TaskDialog from '../../components/TaskDialog';
import TaskController from '../../controllers/Tasks';

const useStyles = makeStyles({
  tasks: {
    padding: 25
  }
});

export default () => {
  const classes = useStyles();

  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  const taskController = useMemo(() => new TaskController(), []);

  const saveTask = async (task) => {
    await taskController.update(task);

    setSelectedTask(null);
    initialize();
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  }

  const refetch = () =>
    taskController.fetchAll()
      .then(tasks => {
        setTasks(tasks);
      });

  const initialize = () => {
    setLoading(true);

    refetch().then(() => setLoading(false));
  };

  useEffect(() => {
    initialize();

    setInterval(() => refetch(), 1000);
  }, []);

  return (
    <Loadable loading={isLoading}>
      <TaskGrid tasks={tasks} className={classes.tasks} onTaskClick={handleTaskClick} admin/>
      <TaskDialog task={selectedTask} open={selectedTask !== null} onClose={() => setSelectedTask(null)} saveTask={saveTask}/>
    </Loadable>
  )
};
