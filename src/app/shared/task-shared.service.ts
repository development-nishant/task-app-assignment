import { Task } from './../task-page/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {ApplicationConfig} from '../appconfig';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskSharedService {

  //Central location where all the tasks will be saved
  private centralTaskListRepo = new BehaviorSubject<Task[]>([]);

  //Observable from above task list which can be subscribed wherever required (task list/task grid)
  public centralTaskListRepoObservable = this.centralTaskListRepo.asObservable();


  constructor(private httpClient: HttpClient) {

  }

  getAllTasks() : Observable<any> {
  // Ajax request to fetch tasks list from API...
    return this.httpClient.get(ApplicationConfig.GET_TASKS_LIST_URL).pipe(

      map((response :any) => {
        /**
        * API data will be saved to centralTaskListRepo array as observable which will be observed
        * by MainPanel task counter , Homescreen task list , Taskscreen grid
        * */
          this.centralTaskListRepo.next((response && response.tasks ) ? response.tasks : []);

     }));
   }

   addNewTask(newTask : Task) : void {

     let updatedTaskList = this.centralTaskListRepo.getValue().concat([newTask]);
     debugger;
     this.centralTaskListRepo.next(updatedTaskList);

    }


}
