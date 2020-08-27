import 'moment-duration-format';
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import cyber from '../../assets/anonymous.jpg';

const useStyles = makeStyles({
  background: {
    position: 'relative',
    '&:after': {
      content: '""',
      backgroundImage: `url(${cyber})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.3,
      zIndex: -1,
      position: 'absolute',
      top: -150,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  title: {
    fontWeight: 'bold',
    fontSize: '8rem'
  },
  space: {
    margin: '50px 0'
  }
});

export default () => {
  const classes = useStyles();

  const [endTime, setEndTime] = useState(moment("8/29/2020 12:30", "M/D/YYYY H:mm"));
  const [countdown, setCountdown] = useState('');

  const updateTime = () => {
    const duration = moment.duration(endTime.diff(moment.now()), 'milliseconds');
    const formattedDuration = duration.format('DD:hh:mm:ss', 0, {trim: false});

    setCountdown(formattedDuration);
  };

  useEffect(() => {
    updateTime();

    setInterval(updateTime, 500)
  }, []);

  return (
    <Box height="100%" display="flex" alignItems="center" justifyContent="center" position="relative">
      <Box dir="rtl" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" height="100%" width="100%" className={classes.background}>
        <Typography variant="h2">
            המטרה שלכם היא להציל את המדינה, תעשו כל שביכולתכם להצליח במשימה החשובה הזו!
          </Typography>
          <Typography variant="h1" className={classes.title}>
            אתם מוכנים??
          </Typography>
          <Typography align="left" variant="h1" className={classes.space}>
            {countdown}
          </Typography>
      </Box>
    </Box>
  );
}
