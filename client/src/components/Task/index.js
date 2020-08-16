import React from 'react';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';

export default ({task}) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
      <Card>
        <CardContent>
          <Typography variant="h4">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
