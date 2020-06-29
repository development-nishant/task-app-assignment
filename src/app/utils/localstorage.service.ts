import { Injectable } from '@angular/core';
import { TaskStorage } from './task-storage';

/**
 * Local storage service
 * used for persist application data in observable key value pair
 */
@Injectable()
export class LocalStorageService extends TaskStorage {

  /**
   * Constructor with service injection
   * @param window
   */
  constructor() {
    super(window.localStorage);
  }
}
