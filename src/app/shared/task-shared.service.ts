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

    return this.httpClient.get(ApplicationConfig.GET_TASKS_LIST_URL).pipe(

      map((response :any) => {

              this.centralTaskListRepo.next((response && response.tasks ) ? response.tasks : []);

     }));
   }

   addNewTask(newTask : Task) : void {

     let updatedTaskList = this.centralTaskListRepo.getValue().concat([newTask]);
     debugger;
     this.centralTaskListRepo.next(updatedTaskList);

     var json = JSON.stringify(updatedTaskList);



   }

   writeFile (newTask :Task){
    var theData = {
      foo: "bar"
    };
    var theJSON = JSON.stringify(theData);
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);

    var a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Right-click and choose 'save as...'";
    document.body.appendChild(a);
}
}
