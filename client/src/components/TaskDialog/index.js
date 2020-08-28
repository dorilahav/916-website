import React from 'react';
import Divider from '../Divider';
import {TaskCategory} from '../../../../server/src/api/tasks/enums'
import {Dialog, DialogTitle, DialogContent, Box, Typography, TextField} from '@material-ui/core';

export default ({task, open, onClose}) => {
  return open && (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle disableTypography>
      <Typography variant="h3">
        {task.title}
      </Typography>
    </DialogTitle>
    <Divider />
    <DialogContent>
      <Box display="flex" flexDirection="column">
        {Object.values(TaskCategory).map()}
      </Box>
    </DialogContent>
  </Dialog>
  );
};