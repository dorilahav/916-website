import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Progress from './Progress';
import TaskList from '../../components/TaskList';

const defaultTasks = [
  {
    id: '0',
    title: 'שהטוב ביותר ינצח',
    description: ''
  },
  {
    id: '1',
    title: 'Task 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elit sed justo bibendum, et convallis tellus semper. Donec vel euismod nisi. Curabitur mattis lectus eu ultrices molestie. Vestibulum sem erat, dapibus mollis diam id, sagittis fermentum risus. Ut sagittis convallis nibh in facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis ullamcorper neque. Integer suscipit eget nulla et ultrices. Integer nec ligula facilisis, iaculis diam quis, rutrum est. Nulla purus augue, commodo ac libero in, pellentesque consequat eros. Aliquam erat volutpat. Duis sed turpis metus. Nunc interdum nisi eu mi molestie auctor. Suspendisse potenti. Donec.'
  },
  {
    id: '2',
    title: 'Task 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elit sed justo bibendum, et convallis tellus semper. Donec vel euismod nisi. Curabitur mattis lectus eu ultrices molestie. Vestibulum sem erat, dapibus mollis diam id, sagittis fermentum risus. Ut sagittis convallis nibh in facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis ullamcorper neque. Integer suscipit eget nulla et ultrices. Integer nec ligula facilisis, iaculis diam quis, rutrum est. Nulla purus augue, commodo ac libero in, pellentesque consequat eros. Aliquam erat volutpat. Duis sed turpis metus. Nunc interdum nisi eu mi molestie auctor. Suspendisse potenti. Donec.'
  }
];

const defaultCategories = [
  {
    id: '1',
    name: 'לחימה',
    value: 90,
    maxValue: 100,
    color: 'red'
  },
  {
    id: '2',
    name: 'חשיבה יצירתית',
    value: 0,
    maxValue: 100,
    color: 'blue'
  },
  {
    id: '3',
    name: 'אסטרטגיה',
    value: 100,
    maxValue: 100,
    color: 'green'
  },
  {
    id: '4',
    name: 'פתרון בעיות',
    value: 25,
    maxValue: 100,
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
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <Progress categories={categories}/>
      <TaskList tasks={tasks} className={classes.tasks}/>
    </>
  )
};
