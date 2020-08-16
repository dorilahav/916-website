import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Progress from './Progress';
import TaskList from '../../components/TaskList';

const defaultTasks = [
  {
    id: '0',
    title: 'שהטוב ביותר ינצח',
    description: '',
    points: {
      1: 10,
      2: 10,
      3: 10,
      4: 10
    },
    status: 1
  },
  {
    id: '1',
    title: 'Task 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elit sed justo bibendum, et convallis tellus semper. Donec vel euismod nisi. Curabitur mattis lectus eu ultrices molestie. Vestibulum sem erat, dapibus mollis diam id, sagittis fermentum risus. Ut sagittis convallis nibh in facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis ullamcorper neque. Integer suscipit eget nulla et ultrices. Integer nec ligula facilisis, iaculis diam quis, rutrum est. Nulla purus augue, commodo ac libero in, pellentesque consequat eros. Aliquam erat volutpat. Duis sed turpis metus. Nunc interdum nisi eu mi molestie auctor. Suspendisse potenti. Donec.',
    points: {
      4: 20,
      3: 5
    },
    status: 0
  },
  {
    id: '2',
    title: 'Task 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elit sed justo bibendum, et convallis tellus semper. Donec vel euismod nisi. Curabitur mattis lectus eu ultrices molestie. Vestibulum sem erat, dapibus mollis diam id, sagittis fermentum risus. Ut sagittis convallis nibh in facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis ullamcorper neque. Integer suscipit eget nulla et ultrices. Integer nec ligula facilisis, iaculis diam quis, rutrum est. Nulla purus augue, commodo ac libero in, pellentesque consequat eros. Aliquam erat volutpat. Duis sed turpis metus. Nunc interdum nisi eu mi molestie auctor. Suspendisse potenti. Donec.',
    points: {
      1: 20,
      2: 40
    },
    status: 0
  }
];

const baseCategories = [
  {
    id: '1',
    name: 'לחימה',
    color: 'red'
  },
  {
    id: '2',
    name: 'חשיבה יצירתית',
    color: 'blue'
  },
  {
    id: '3',
    name: 'אסטרטגיה',
    color: 'green'
  },
  {
    id: '4',
    name: 'פתרון בעיות',
    color: 'yellow'
  }
];

const useStyles = makeStyles({
  tasks: {
    padding: 25
  }
});

export default () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState(defaultTasks);
  const [categories, setCategories] = useState([]);

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
    }, baseCategories);

    setCategories(categories);
  };

  useEffect(() => {
    regenerateCategories();
  }, [tasks]);

  return (
    <>
      <Progress categories={categories}/>
      <TaskList tasks={tasks} className={classes.tasks}/>
    </>
  )
};
