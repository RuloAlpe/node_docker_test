import {
  getTasksRepository, createTaskRepository, updateTaskRepository, deleteTaskRepository,
} from '../repository/task.repository';

const getTasksService = async () => {
  const tasks = await getTasksRepository();
  return tasks;
};

const createTaskService = async (task) => {
  const newTask = await createTaskRepository(task);
  return newTask;
};

const updateTaskService = async (task) => {
  const taskUpdated = await updateTaskRepository(task);
  return taskUpdated;
};

const deleteTaskService = async (taskId) => {
  const taskDelete = await deleteTaskRepository(taskId);
  return taskDelete;
};

export {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
