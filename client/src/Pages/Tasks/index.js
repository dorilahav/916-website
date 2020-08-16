import React, {useState} from 'react';
import TaskList from '../../components/TaskList';

const defaultTasks = [
  {
    _id: '0',
    title: 'שהטוב ביותר ינצח',
    description: ''
  },
  {
    _id: '1',
    title: 'Task 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elit sed justo bibendum, et convallis tellus semper. Donec vel euismod nisi. Curabitur mattis lectus eu ultrices molestie. Vestibulum sem erat, dapibus mollis diam id, sagittis fermentum risus. Ut sagittis convallis nibh in facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis ullamcorper neque. Integer suscipit eget nulla et ultrices. Integer nec ligula facilisis, iaculis diam quis, rutrum est. Nulla purus augue, commodo ac libero in, pellentesque consequat eros. Aliquam erat volutpat. Duis sed turpis metus. Nunc interdum nisi eu mi molestie auctor. Suspendisse potenti. Donec.'
  },
  {
    _id: '2',
    title: 'Task 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elit sed justo bibendum, et convallis tellus semper. Donec vel euismod nisi. Curabitur mattis lectus eu ultrices molestie. Vestibulum sem erat, dapibus mollis diam id, sagittis fermentum risus. Ut sagittis convallis nibh in facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis ullamcorper neque. Integer suscipit eget nulla et ultrices. Integer nec ligula facilisis, iaculis diam quis, rutrum est. Nulla purus augue, commodo ac libero in, pellentesque consequat eros. Aliquam erat volutpat. Duis sed turpis metus. Nunc interdum nisi eu mi molestie auctor. Suspendisse potenti. Donec.'
  }
];

export default () => {
  const [tasks, setTasks] = useState(defaultTasks);

  return (
    <TaskList tasks={tasks} />
  )
};
