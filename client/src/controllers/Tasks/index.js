import {TASKS} from '../../constants';
import { TaskStatus } from '../../../../server/src/api/tasks/enums';

export default class TaskController {
  fetchAll() {
    return new Promise((resolve) => {
      resolve(TASKS);
    });
  }

  getById(tasks, taskId) {
    return tasks.find(({id}) => id === taskId);
  }

  doesTaskMeetRequirements(task, tasks) {
    return task.required.every(taskId => this.getById(tasks, taskId).status === TaskStatus.COMPLETED)
  }

  getUnlockedTasks(tasks) {
    return tasks.filter(task => task.required === undefined || this.doesTaskMeetRequirements(task, tasks));
  }

  filterCompletedTasks(tasks) {
    return tasks.filter(task => task.status !== TaskStatus.COMPLETED);
  }
}