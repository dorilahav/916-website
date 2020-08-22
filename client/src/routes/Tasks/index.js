import React, {useState, useEffect, useMemo} from 'react';
import {makeStyles} from '@material-ui/core';
import Progress from './Progress';
import TaskList from '../../components/TaskList';
import Loadable from '../../components/Loadable';
import TaskController from '../../controllers/Tasks';
import CategoryController from '../../controllers/Categories';
import {CATEGORIES_INFO} from '../../constants';

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

  const initialize = () => {
    taskController.fetchAll()
      .then(tasks => {
        setTasks(tasks)
        updateCategories(tasks)
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Loadable loading={isLoading}>
      <Progress categories={categories}/>
      <TaskList tasks={tasks} className={classes.tasks}/>
    </Loadable>
  )
};
