import {TaskStatus, TaskCategory} from '../../../../server/src/api/tasks/enums';
import {CATEGORIES_INFO} from '../../constants';

const START_POINTS = 0;

const getNewEmptyCategoriesObject = () =>
  Object.values(TaskCategory)
    .reduce((categories, category) =>
      Object.assign(categories, {[category]: {points: START_POINTS, maxPoints: START_POINTS}}), {});

export default class CategoryController {
  getCategoriesPoints(tasks) {
    return tasks.reduce((pointsPerCategory, task) => {
      if (!task.points) {
        return pointsPerCategory;
      }

      Object.entries(task.points).forEach(([category, points]) => {
        if (!points) {
          return;
        }

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
    const categories = Object.entries(CATEGORIES_INFO).map(([id, info]) => ({id, ...info}));
    
    return this.addPointsToCategories(categories, this.getCategoriesPoints(tasks));
  }
}