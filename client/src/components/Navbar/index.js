import React from 'react';
import Logo from '../../assets/logo.png';
import {AppBar, Toolbar, Typography, Box, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 30px'
  },
  toolbar: {
    justifyContent: 'center'
  },
  logo: {
    maxWidth: 40,
    marginRight: 20
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} dir="rtl">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" flexDirection="row">
          <img src={Logo} alt="Logo" className={classes.logo}/>
          <Typography variant="h3">משימות חשאיות</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
