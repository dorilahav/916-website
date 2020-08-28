import mongoose from 'mongoose';
import connectDatabase from '../src/config/database';
import {TASKS} from '../src/constants';
import Task from '../src/api/tasks/model';

connectDatabase()
  .then(async() => {
    await Task.collection.deleteMany({})
  })
  .then(() => Promise.all(
    TASKS.map(task =>
      new Task(task).save())))
  .then(() => mongoose.disconnect());