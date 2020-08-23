import {Router} from 'express';
import TasksRouter from './tasks';

const router = Router();

router.use('/tasks', TasksRouter);

router.use((error, req, res, next) => {
  console.error(error);
  
  if (error.status) {
    res.send(error.status).send(error.message);
  } else {
    res.status(500).send('An error has occured!');
  }
});

export default router;
