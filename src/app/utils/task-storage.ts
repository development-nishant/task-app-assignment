import { BehaviorSubject, Observable } from 'rxjs';
import {Task} from "../model/task.model";
export const TASK_KEY = 'TASK';
/**
 * Storage service
 * used for persist application data in observable key value pair
 */
export class TaskStorage {

  private storage: Storage;
  private subjects: Map<string, BehaviorSubject<any>>;

  /**
   * Constructor with service injection
   * @param storage
   */
  constructor(storage: Storage) {
    this.storage = storage;
    this.subjects = new Map<string, BehaviorSubject<any>>();
  }

  /**
   * watch data of given key
   * @param key
   * @param defaultValue
   */
  watch(): Observable<any> {
    if (!this.subjects.has(TASK_KEY)) {
      this.subjects.set(TASK_KEY, new BehaviorSubject<any>(null));
    }
    var item = this.storage.getItem(TASK_KEY);
    if (item === "undefined") {
      item = undefined;
    } else {
      item = JSON.parse(item);
    }
    this.subjects.get(TASK_KEY).next(item);
    return this.subjects.get(TASK_KEY).asObservable();
  }

  /**
   * get data of given key
   * @param key
   */
  get(): any {
    var item = this.storage.getItem(TASK_KEY);
    if (item === "undefined") {
      item = undefined;
    } else {
      item = JSON.parse(item);
    }
    return item;
  }

  /**
   * set value on given key
   * @param key
   * @param value
   */
  set(value: any) {
    this.storage.setItem(TASK_KEY, JSON.stringify(value));
    if (!this.subjects.has(TASK_KEY)) {
      this.subjects.set(TASK_KEY, new BehaviorSubject<any>(value));
    } else {
      this.subjects.get(TASK_KEY).next(value);
    }
  }

  /**
   * clear all available keys
   */
  clear() {
    this.subjects.clear();
    this.storage.clear();
  }

  /**
   * Create new task and it to list
   * @param task
   */
  addNewTask(task: Task) {
    if(task != null) {
      let data = this.get();
      this.set(data.push(task));
    }
  }


}
