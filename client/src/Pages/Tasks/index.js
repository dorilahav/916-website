import React, {useState, useEffect, useMemo} from 'react';
import {makeStyles} from '@material-ui/core';
import Progress from './Progress';
import TaskList from '../../components/TaskList';
import Loadable from '../../components/Loadable';
import {CATEGORIES, TASKS} from '../../constants';

const useStyles = makeStyles({
  tasks: {
    padding: 25
  }
});

export default () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const regenerateCategories = () => {
    const categories = tasks.reduce((categories, task) => {
      
      Object.entries(task.points).forEach(([categoryId, points]) => {
        const category = categories.find(category => category.id === categoryId);

        if (!category) {
          return;
        }

        category.maxValue = category.maxValue ? category.maxValue + points : points;
        
        if (task.status === 1) {
          category.value = category.value ? category.value + points : points;
        }
      });

      return categories;
    }, CATEGORIES);

    setCategories(categories);
  };

  const initialize = () => {
    regenerateCategories();
    setLoading(false);
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
