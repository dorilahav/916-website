import {Schema, model} from 'mongoose';
import {TaskStatus} from './enums';

const schema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  points: {
    type: Object,
    required: false
  },
  status: {
    type: String,
    enum: [...Object.values(TaskStatus)],
    required: true,
    default: TaskStatus.PENDING
  },
  requiredTasks: {
    type: Array,
    required: true
  },
  unlocked: {
    type: Boolean,
    default: false
  }
});

export default model('Task', schema, 'tasks');
