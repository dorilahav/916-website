import {TaskStatus, TaskCategory} from '../../../../server/src/api/tasks/enums';
import {CATEGORIES_INFO} from '../../constants';

const START_POINTS = 0;

const getNewEmptyCategoriesObject = () =>
  Object.values(TaskCategory)
    .reduce((categories, category) =>
      Object.assign(categories, {[category]: {points: START_POINTS, maxPoints: 0}}), {});

export default class CategoryController {
  getCategoriesPoints(tasks) {
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

  addPointsToCategories(categories, categoriesPoints) {
    return categories.reduce((categories, category) =>
      ([...categories, {...category, ...categoriesPoints[category.id]}]), []);
  }

  getCategoriesWithPoints(tasks) {
    return this.addPointsToCategories(CATEGORIES_INFO, this.getCategoriesPoints(tasks));
  }
}