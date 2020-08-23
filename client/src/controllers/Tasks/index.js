import {TASKS} from '../../constants';
import { TaskStatus } from '../../../../server/src/api/tasks/enums';
import {LOREM_IPSUM} from '../../constants';

const CIPHER_TASK_ID = '0';

const convertToCipherText = text =>
  LOREM_IPSUM.slice(0, text.length);

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
    return task.requiredTasks.every(taskId => this.getById(tasks, taskId).status === TaskStatus.COMPLETED)
  }

  isCipherTaskCompleted(tasks) {
    return this.getById(tasks, CIPHER_TASK_ID).status === TaskStatus.COMPLETED;
  }

  getCipheredTasks(tasks) {
    return tasks.map(({title, description, ...task}) => {
      if (task.id === CIPHER_TASK_ID) {
        return {title, description, ...task};
      }

      return {
        title: convertToCipherText(title),
        description: convertToCipherText(description),
        ...task
      };
    });
  }

  enableCipherTaskLogic(tasks) {
    return this.isCipherTaskCompleted(tasks) ? tasks : this.getCipheredTasks(tasks);
  }

  getUnlockedTasks(tasks) {
    return this.enableCipherTaskLogic(tasks)
      .filter(task => task.requiredTasks === undefined || this.doesTaskMeetRequirements(task, tasks));
  }

  filterCompletedTasks(tasks) {
    return tasks.filter(task => task.status !== TaskStatus.COMPLETED);
  }
}