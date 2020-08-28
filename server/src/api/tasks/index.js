import {Router} from 'express';
import {taskFetcher} from './middlewares';
import {create, getAll, getOne, replace} from './controller';

const router = Router();

router.post('/', create);
router.get('/', getAll);

router.get('/:id', taskFetcher, getOne);
router.put('/:id', taskFetcher, replace);

export default router;
