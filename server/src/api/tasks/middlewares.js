import Task from './model';

export const taskFetcher = (req, res, next) => {
  const {id} = req.params;

  return Task.findOne({id})
    .then(task => {
      if (task === null) {
        throw new Error('task not found!');
      }

      req.task = task;

      return next();
    })
    .catch(next);
}