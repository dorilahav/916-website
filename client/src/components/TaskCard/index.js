import React from 'react';
import Divider from '../Divider';
import {Grid, Card, CardContent, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    animation: '$enter 500ms',
    cursor: 'default'
  },
  '@keyframes enter': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.2)'
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)'
    }
  },
  items: {
    color: theme.palette.grey[500],
    marginTop: 10
  }
}));

export default ({task, onClick}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={12} lg={4} xl={3} onClick={onClick}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3">{task.title}</Typography>
          <Divider />
          <Typography variant="h5">{task.description}</Typography>
          <div className={classes.items}>
            {task.items && task.items.map((item, index) =>
              <Typography key={`item-${index}`} variant="h5">- {item}</Typography>)}
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}
