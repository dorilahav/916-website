import React from 'react';
import {Grid, Card, CardContent, Divider, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
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
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: '3px 0'
  }
});

export default ({task}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">{task.title}</Typography>
          <Divider classes={{root: classes.divider}} />
          <Typography variant="h6">{task.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
