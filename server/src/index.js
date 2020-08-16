import 'dotenv/config';
import startWebsite from './config/express';
import connectDatabase from './config/database';

connectDatabase().then(startWebsite)
  .then((port) => {
    console.log(`Website started on port ${port}!`);
  }).catch(() => {
    console.error('An error occured while starting the website');
  });
