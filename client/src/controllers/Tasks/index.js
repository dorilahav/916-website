import {TASKS} from '../../constants';

export default class TaskController {
  fetchAll() {
    return new Promise((resolve) => {
      resolve(TASKS);
    });
  }
}