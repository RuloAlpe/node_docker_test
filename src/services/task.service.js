/* eslint-disable class-methods-use-this */
import TaskRepository from '../repository/task.repository';

const taskRepository = new TaskRepository();

const getTasks = async () => {
  const tasks = await taskRepository.getTasks();
  return tasks;
};

const createTask = async (task) => {
  const newTask = await taskRepository.createTask(task);
  return newTask;
};

const updateTask = async (task) => {
  const taskUpdated = await taskRepository.updateTask(task);
  return taskUpdated;
};

const deleteTask = async (taskId) => {
  const taskDelete = await taskRepository.deleteTask(taskId);
  return taskDelete;
};

export {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
