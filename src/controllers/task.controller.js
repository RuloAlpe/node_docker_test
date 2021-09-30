import taskService from '../service/task.service';

const getTasks = async () => {
  console.log('Controller: getTasks');
  const tasks = await taskService.getTasks();
  return tasks;
};

const createTask = async (task) => {
  console.log('Controller: createTask', task);
  const newTask = await taskService.createTask(task);
  return newTask;
};

const updateTask = async (task) => {
  console.log('Controller: updateTask', task);
  const taskUpdated = await taskService.updateTask(task);
  return taskUpdated;
};

const deleteTask = async (taskId) => {
  console.log('Controller: deleteTask', taskId);
  const taskDeleted = await taskService.deleteTask(taskId);
  return taskDeleted;
};

export {
  getTasks, createTask, updateTask, deleteTask,
};
