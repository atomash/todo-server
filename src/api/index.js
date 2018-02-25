import express from 'express';
import { add, getList, removeTask, updateTask } from './controller';

const router = express.Router();

router.get('/todo', getList);
router.post('/todo', add);
router.delete('/todo/:id', removeTask);
router.put('/todo/:id', updateTask);

export default router;