import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    name: 'string',
    description: 'string',
    createDate: 'string',
    updatedDate: 'string',
    createdBy: 'string',
    updatedBy: 'string',
  },
  // {
  //   timestamps: { createDate: 'created_at', updatedDate: 'updated_at' },
  // },
);

const taskModel = mongoose.model('todos', taskSchema);

export { taskModel };
