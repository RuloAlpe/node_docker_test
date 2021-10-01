import express from 'express';
import {
  getTasks, createTask, updateTask, deleteTask,
} from '../../controllers/task.controller';

const router = express.Router();

router.get('/', async (req, res) => {
  getTasks().then((data) => res.status(200).json(data));
});

router.post('/', async (req, res) => {
  createTask(req.body.task).then((data) => res.status(201).json(data));
});

router.put('/', (req, res) => {
  updateTask(req.body.task).then((data) => res.json(data));
});

router.delete('/:taskId', (req, res) => {
  deleteTask(req.params.taskId).then((data) => res.json(data));
});

export default router;
