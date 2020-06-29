import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {Task} from '../task-page/task';
import {ApplicationConfig} from '../appconfig';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {

  }
  public myTasksList : any = [];
  private myTasksCount = new BehaviorSubject<number>(0);
  public myTasksCountAsObservable = this.myTasksCount.asObservable();

  public teamTasksList : any = [];
  private teamTasksCount = new BehaviorSubject<number>(0);
  public teamTasksCountAsObservable = this.teamTasksCount.asObservable();

  
  getTasksList(): Observable<any> {

   return this.httpClient.get(ApplicationConfig.GET_TASKS_LIST_URL).pipe(
     map((response:any) => {
       let data = response ? response['tasks'] : [];

      
       let globalTask = data.filter((task)=> {
         if(task.isGlobal){
           return task;
         }
       });
       let leaderTask = data.filter((task)=> {
        if(task.isLeader){
          return task;
        }
      });
      let personalTask = data.filter((task)=> {
        if(!task.isLeader && !task.isGlobal){
          return task;
        }
      });
       // Immediatley update counter of tasks so that it can reflect on top bar
       this.myTasksCount.next(personalTask.length);
       this.teamTasksCount.next(globalTask.length);

       return {global:globalTask,personal:personalTask,leader:leaderTask};
    }));
  }
 
  
  
}
