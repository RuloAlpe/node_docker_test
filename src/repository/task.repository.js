/* eslint-disable no-console */
import { taskModel } from '../models/task.model';

const getTasksRepository = async () => {
  const tasks = await taskModel.find({});
  console.log('tasks:::', tasks);
  return tasks;
};

const createTaskRepository = async (task) => {
  let data = {};
  try {
    data = await taskModel.create(task);
  } catch (err) {
    console.error(`Error::${err}`);
  }
  return data;
};

const updateTaskRepository = async (task) => {
  let data = {};
  try {
    data = await taskModel.updateOne(task);
  } catch (err) {
    console.error(`Error::${err}`);
  }
  return data;
};

const deleteTaskRepository = async (taskId) => {
  let data = {};
  try {
    data = await taskModel.deleteOne({ _id: taskId });
  } catch (err) {
    console.error(`Error::${err}`);
  }
  return { status: `${data.deletedCount > 0}` };
};

export {
  getTasksRepository, createTaskRepository, updateTaskRepository, deleteTaskRepository,
};
