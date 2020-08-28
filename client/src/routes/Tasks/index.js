import React, {useState, useEffect, useMemo} from 'react';
import {makeStyles} from '@material-ui/core';
import Progress from './Progress';
import TaskGrid from '../../components/TaskGrid';
import Loadable from '../../components/Loadable';
import TaskController from '../../controllers/Tasks';
import CategoryController from '../../controllers/Categories';

const useStyles = makeStyles({
  tasks: {
    padding: '0 25px',
    overflow: 'auto'
  }
});

export default () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const taskController = useMemo(() => new TaskController(), []);
  const categoryController = useMemo(() => new CategoryController(), []);
 
  const updateCategories = (tasks) => {
    setCategories(categoryController.getCategoriesWithPoints(tasks));
  };

  const refetch = () =>
    taskController.fetchAll()
      .then(tasks => {
        setTasks(tasks);
        updateCategories(tasks);
      });

  const initialize = () => {
    refetch().then(() => setLoading(false));
  };

  useEffect(() => {
    initialize();

    setInterval(() => refetch(), 1000);
  }, []);

  return (
    <Loadable loading={isLoading}>
      <Progress categories={categories}/>
      <TaskGrid tasks={tasks} className={classes.tasks}/>
    </Loadable>
  )
};
