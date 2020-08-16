import {Router} from 'express';
import TasksRouter from './tasks';

const router = Router();

router.use('/tasks', TasksRouter);

export default router;
