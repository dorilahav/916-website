import Task from './model';
import TaskSchema from './schema';

export const getAll = (req, res, next) => {
  Task.find().then(entities => {
    res.send(entities);
  }).catch(next);
};

export const create = async (req, res, next) => {
  let newTask;

  try {
    newTask = await TaskSchema.validate(req.body);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  new Task(newTask).save().then(createdTask => {
    res.status(201).send(createdTask);
  }).catch(next);
};
