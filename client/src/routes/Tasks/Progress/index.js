import React from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 25
  }
}));

const useNameStyles = (color) => makeStyles(() => ({
  text: {
    color,
    marginLeft: 10
  }
}))();

const CategoryName = ({color, category}) => {
  const classes = useNameStyles(color);

  return <Typography variant="h4" className={classes.text}>{category}</Typography>;
}

export default ({categories}) => {
  const classes = useStyles();
  
  return (
    <Box display="flex" justifyContent="space-around" className={classes.root}>
      {categories.map(category => (
        <Box key={category.id} display="flex" alignItems="center" justifyContent="center" flex="1">
          <CategoryName color={category.color} category={category.name} />
          <Typography variant="h4">{category.points}</Typography>
        </Box>
      ))}
    </Box>
  );
};