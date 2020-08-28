const yup = require('yup');
import {TaskStatus, TaskCategory} from './enums';

const pointsSchema = yup.object().noUnknown(true, 'An invalid category was entered').shape({
  [TaskCategory.FIGHTING]: yup.number().notRequired(),
  [TaskCategory.STRATEGY]: yup.number().notRequired(),
  [TaskCategory.CREATIVE_THINKING]: yup.number().notRequired(),
  [TaskCategory.PROBLEM_SOLVING]: yup.number().notRequired()
});

const schema = yup.object().noUnknown().shape({
  id: yup.string().required('Every task must have an id!').typeError('Invalid id was provided'),
  title: yup.string().required('A task must have a title').max(100, 'Title must be less than ${max} characters long').typeError('Invalid title was provided'),
  description: yup.string().required('A task must have a description').typeError('Invalid description was provided'),
  items: yup.array().of(yup.string()).notRequired(),
  points: pointsSchema.default({}).typeError('Invalid points object was provided'),
  status: yup.string().oneOf([...Object.values(TaskStatus)], 'Invalid status was provided').default(TaskStatus.PENDING).required('A task must have a status').typeError('Invalid status was provided'),
  unlocked: yup.boolean().typeError('Invalid unlocked state was provided')
});

export default schema;
