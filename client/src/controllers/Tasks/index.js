import {TaskStatus} from '../../../../server/src/api/tasks/enums';
import {LOREM_IPSUM} from '../../constants';
import ResourceService from '../../services/resource';
import {BASE_API_URL} from '../../constants';

const CIPHER_TASK_ID = '0';

const convertToCipherText = text =>
  LOREM_IPSUM.slice(0, text.length);

export default class TaskController {
  constructor() {
    this.resource = new ResourceService(`${BASE_API_URL}/api/tasks`);
  }

  fetchAll() {
    return this.resource.getAll();
  }

  getById(tasks, taskId) {
    return tasks.find(({id}) => id === taskId);
  }

  isCipherTaskCompleted(tasks) {
    return this.getById(tasks, CIPHER_TASK_ID)?.status === TaskStatus.COMPLETED;
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

  isUnlocked(task) {
    return task.status === TaskStatus.UNLOCKED;
  }

  getUnlockedTasks(tasks) {
    return this.enableCipherTaskLogic(tasks).filter(this.isUnlocked);
  }

  filterCompletedTasks(tasks) {
    return tasks.filter(task => task.status !== TaskStatus.COMPLETED);
  }

  insert(task) {
    return this.resource.insert(task);
  }

  update(task) {
    return this.resource.replace(task.id, task);
  }
}