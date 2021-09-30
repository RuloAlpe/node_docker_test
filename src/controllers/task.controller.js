/* eslint-disable no-console */
import {
  getTasksService, createTaskService, updateTaskService, deleteTaskService,
} from '../services/task.service';

const getTasks = async () => {
  console.log('Controller: getTasks');
  const tasks = await getTasksService();
  return tasks;
};

const createTask = async (task) => {
  console.log('Controller: createTask', task);
  const newTask = await createTaskService(task);
  return newTask;
};

const updateTask = async (task) => {
  console.log('Controller: updateTask', task);
  const taskUpdated = await updateTaskService(task);
  return taskUpdated;
};

const deleteTask = async (taskId) => {
  console.log('Controller: deleteTask', taskId);
  const taskDeleted = await deleteTaskService(taskId);
  return taskDeleted;
};

export {
  getTasks, createTask, updateTask, deleteTask,
};
