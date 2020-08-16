import React from 'react';
import {Grid, Card, CardContent, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    animation: '$enter 500ms'
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
  }
});

export default ({task}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
