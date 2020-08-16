import {Schema, model} from 'mongoose';
import {TaskStatus} from './enums';

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: [...Object.values(TaskStatus)],
    required: true,
    default: TaskStatus.PENDING
  },
  points: {
    type: Object,
    required: false
  }
});

export default model('Task', schema, 'tasks');
