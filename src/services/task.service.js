/* eslint-disable class-methods-use-this */
import TaskRepository from '../repository/task.repository';

const taskRepository = new TaskRepository();

class TaskService {
  async getTasks() {
    const tasks = await taskRepository.getTasks();
    return tasks;
  }

  async createTask(task) {
    const newTask = await taskRepository.createTask(task);
    return newTask;
  }

  async updateTask(task) {
    const taskUpdated = await taskRepository.updateTask(task);
    return taskUpdated;
  }

  async deleteTask(taskId) {
    const taskDelete = await taskRepository.deleteTask(taskId);
    return taskDelete;
  }
}

export default TaskService;
