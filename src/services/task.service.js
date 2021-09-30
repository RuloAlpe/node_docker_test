/* eslint-disable class-methods-use-this */
import taskRepository from '../repository/task.repository';

const getTasksService = async () => {
  const tasks = await taskRepository.getTasks();
  return tasks;
};

const createTaskService = async (task) => {
  const newTask = await taskRepository.createTask(task);
  return newTask;
};

const updateTaskService = async (task) => {
  const taskUpdated = await taskRepository.updateTask(task);
  return taskUpdated;
};

const deleteTaskService = async (taskId) => {
  const taskDelete = await taskRepository.deleteTask(taskId);
  return taskDelete;
};

export {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
