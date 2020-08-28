import React, {useState, useEffect} from 'react';
import Divider from '../Divider';
import {TaskCategory, TaskStatus} from '../../../../server/src/api/tasks/enums'
import {CATEGORIES_INFO} from '../../constants';
import {Dialog, DialogTitle, DialogContent, Box, Grid, Typography, TextField, makeStyles, DialogContentText, FormControlLabel, Switch, Button} from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '90%',
    minWidth: 400,
    maxWidth: 1000,
    height: 'fit-content'
  },
  pointInput: {
    fontSize: '3rem'
  },
  pointInputLabel: {
    fontSize: '3rem'
  }
});

const TaskDialog = ({task, open, onClose, saveTask}) => {
  const classes = useStyles();

  const [newTask, setNewTask] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setNewTask({...task});
    setUnlocked(task?.status === TaskStatus.UNLOCKED);
    setCompleted(task?.status === TaskStatus.COMPLETED);
  }, [task]);

  const handleCategoryPointsChange = (category, value) => {
    setNewTask(curr => {
      if (!curr.points) {
        curr.points = {};
      }

      curr.points[category] = +value;

      return curr;
    });
  }

  const updateTask = () => {
    newTask.status = completed ? TaskStatus.COMPLETED : unlocked ? TaskStatus.UNLOCKED : TaskStatus.LOCKED;

    saveTask(newTask);
  }

  return open && (
  <Dialog dir="rtl" onClose={onClose} open={open} classes={{paper: classes.paper}}>
    <DialogTitle disableTypography>
      <Typography variant="h2">
        {task.title}
      </Typography>
    </DialogTitle>
    <Divider />
    <DialogContent>
      <Box display="flex" flexDirection="column">
        <DialogContentText color="textPrimary" variant="h3">נקודות</DialogContentText>
        <Grid container spacing={5}>
          {Object.values(TaskCategory).map(category =>
            <Grid item xs={6} key={category}>
              <TextField color="secondary" type="number" size="medium"
                         className={classes.textField}
                         label={CATEGORIES_INFO[category].name}
                         InputProps={{classes: {input: classes.pointInput}}}
                         InputLabelProps={{shrink: true, className: classes.pointInputLabel}}
                         defaultValue={(newTask?.points && newTask.points[category]) ?? 0}
                         onChange={event => handleCategoryPointsChange(category, event.target.value)}/>
            </Grid>)}
        </Grid>
      </Box>
      <Grid>
        <FormControlLabel
          control={<Switch checked={unlocked} onChange={() => setUnlocked(curr => !curr)} size="medium"/>}
          label="Unlock"/>

        <FormControlLabel
          control={<Switch checked={completed} onChange={() => setCompleted(curr => !curr)} size="medium"/>}
          label="Complete"/>
      </Grid>

      <Button onClick={updateTask} size="large">Submit</Button>
    </DialogContent>
  </Dialog>
  );
};

export default TaskDialog;