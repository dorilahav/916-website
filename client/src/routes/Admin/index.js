import React, {useState, useEffect, useMemo} from 'react';
import {makeStyles} from '@material-ui/core';
import TaskGrid from '../../components/TaskGrid';
import Loadable from '../../components/Loadable';
import {TASKS} from '../../constants';

const useStyles = makeStyles({
  tasks: {
    padding: 25
  }
});

export default () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState(TASKS);
  const [isLoading, setLoading] = useState(true);

  const initialize = () => {
    setLoading(false);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Loadable loading={isLoading}>
      <TaskGrid tasks={tasks} className={classes.tasks} admin/>
    </Loadable>
  )
};
