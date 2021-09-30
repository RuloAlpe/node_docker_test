/* eslint-disable class-methods-use-this */
import * as db from '../config/db.config';
import Task from '../models/task.model';

class TaskRepository {
  constructor() {
    db.connect();
  }

  async getTasks() {
    const tasks = await Task.find({});
    console.log('tasks:::', tasks);
    return tasks;
  }

  async createTask(task) {
    let data = {};
    try {
      data = await Task.create(task);
    } catch (err) {
      console.error(`Error::${err}`);
    }
    return data;
  }

  async updateTask(task) {
    let data = {};
    try {
      data = await Task.updateOne(task);
    } catch (err) {
      console.error(`Error::${err}`);
    }
    return data;
  }

  async deleteTask(taskId) {
    let data = {};
    try {
      data = await Task.deleteOne({ _id: taskId });
    } catch (err) {
      console.error(`Error::${err}`);
    }
    return { status: `${data.deletedCount > 0}` };
  }
}

export default TaskRepository;
