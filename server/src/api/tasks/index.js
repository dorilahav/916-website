import {Router} from 'express';
import {taskFetcher} from './middlewares';
import {create, getAll, getOne, unlock} from './controller';

const router = Router();

router.post('/', create);
router.get('/', getAll);

router.get('/:id', taskFetcher, getOne);
router.post('/:id/unlock', taskFetcher, unlock);

export default router;
