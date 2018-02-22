import express from 'express';
import { add, getList, removeTask } from './controller';

const router = express.Router();

router.get('/todo', getList);
router.post('/todo', add);
router.delete('/todo/:id', removeTask);

export default router;