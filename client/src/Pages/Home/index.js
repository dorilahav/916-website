import React from 'react';
import {Button, Box, Typography, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {KID_NAME} from '../../constants';

const useStyles = makeStyles({
  title: {
    fontWeight: 700
  },
  space: {
    margin: '50px 0'
  }
});

export default () => {
  const classes = useStyles();

  return (
    <Box dir="rtl" align="center">
      <Typography variant="h1" className={classes.title}>
        ברוכים הבאים למשימת בר המצווה של {KID_NAME}.
      </Typography>
      <Typography variant="h2">
        המטרה שלכם היא להציל את המדינה, תעשו כל שביכולתכם להצליח במשימה החשובה הזו!
      </Typography>
      <Typography align="left" variant="h4" className={classes.space}>
        מדינת ישראל צריכה להתמודד יום יום עם טרור שנשלט על ידי השכנים הקרובים ביותר אלינו. בשביל לנצח את המלחמה שאנו
        מתמודדים בה באופן יום יומי החלטנו לקחת את האנשים הטובים ביותר (כן, אתם). המטרה שלכם היא להצליח בכמה שיותר
        משימות, כל משימה שתנצחו תקנה לכם נקודות, ככל שתצברו יותר נקודות, המדינה תהיה יותר מוגנת. אנחנו כמובן נתגמל אתכם
        בהתאם (אם אתם מבינים למה אני מתכוון).
      </Typography>
      <Button component={Link} variant="contained" to="/tasks" size="large">
        <Typography variant="h2">
          בהצלחה!
        </Typography>
      </Button>
    </Box>
  );
}
