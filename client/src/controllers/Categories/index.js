import {TaskStatus, TaskCategory} from '../../../../server/src/api/tasks/enums';

const START_POINTS = 0;

const getNewEmptyCategoriesObject = () =>
  Object.values(TaskCategory)
    .reduce((categories, category) =>
      Object.assign(categories, {[category]: {points: START_POINTS, maxPoints: 0}}), {});

export default class CategoryController {
  getCategoriesWithPoints (tasks) {
    return tasks.reduce((pointsPerCategory, task) => {
      Object.entries(task.points).forEach(([category, points]) => {
        pointsPerCategory[category].maxPoints += points;

        if (task.status === TaskStatus.COMPLETED) {
          pointsPerCategory[category].points += points;
        }
      });

      return pointsPerCategory;
    }, getNewEmptyCategoriesObject());
  }
}