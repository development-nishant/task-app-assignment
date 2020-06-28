import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {Task} from '../tasks/task';
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

  
  getTasksList(): Observable<Task[]> {

   return this.httpClient.get(ApplicationConfig.GET_TASKS_LIST_URL).pipe(
     map((response:any) => {
       let data = response ? response['tasks'] : [];
       this.myTasksCount.next(data.length);
       this.teamTasksCount.next(data.length);
       return data;
    }));
  }
 
  
  
}
