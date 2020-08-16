import React from 'react';
import Logo from '../../assets/logo.png';
import ProgressBar from '../ProgressBar';
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
        <Box display="flex" justifyContent="space-around" alignItems="center" width="100%">
          <Box display="flex" flex="1" justifyContent="space-around">
            <ProgressBar value={100} maxValue={100} color="red" category="לחימה"/>
            <ProgressBar value={100} maxValue={100} color="blue" category="חשיבה יצירתית"/>
          </Box>

          <Box display="flex" flexDirection="row">
            <img src={Logo} alt="Logo" className={classes.logo}/>
            <Typography variant="h3">משימות חשאיות</Typography>
          </Box>
          
          <Box display="flex" flex="1" justifyContent="space-around">
            <ProgressBar value={100} maxValue={100} color="green" category="אסטרטגיה"/>
            <ProgressBar value={100} maxValue={100} color="yellow" category="פתרון בעיות"/>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
