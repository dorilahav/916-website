const yup = require('yup');
import {TaskStatus, TaskCategory} from './enums';

const pointsSchema = yup.object().noUnknown(true, 'An invalid category for points was entered').shape({
  [TaskCategory.FIGHTING]: yup.number().notRequired(),
  [TaskCategory.STRATEGY]: yup.number().notRequired(),
  [TaskCategory.CREATIVE_THINKING]: yup.number().notRequired(),
  [TaskCategory.PROBLEM_SOLVING]: yup.number().notRequired()
});

const schema = yup.object().noUnknown().shape({
  title: yup.string().required('A task must include a title').max(100, 'Title must be less than ${max} characters long'),
  description: yup.string().required('A task must include a description'),
  status: yup.string().oneOf([...Object.values(TaskStatus)], 'An invalid status was entered').required('A task must include a status'),
  points: pointsSchema.notRequired()
});

export default schema;
