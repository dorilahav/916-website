import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ApiRouter from '../api';

export default () => {
  const app = express();

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/api', ApiRouter);

  const port = process.env.PORT || 3000;

  return new Promise((resolve) => {
    app.listen(port, () => {
      return resolve(port);
    });
  });
}
