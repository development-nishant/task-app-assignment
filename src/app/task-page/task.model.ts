import { Task } from './task';
export class TaskModel {
 /* text: string;
  isGlobal: boolean;
  isLeader: boolean;
  creator: string;
  isCompleted: boolean;
  start: string;
  end: string;*/
  taskObj : Task

  constructor(taskObj : Task) {
    this.taskObj = taskObj;
  }
}
