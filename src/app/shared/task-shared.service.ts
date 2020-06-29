import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../task-page/task';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {ApplicationConfig} from '../appconfig';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskSharedService {

  constructor(private httpClient: HttpClient) {

  }

  getAllTasks(): Observable<Task[]> {

    return this.httpClient.get(ApplicationConfig.GET_TASKS_LIST_URL).pipe(

      map((response :any) => {

        return (response && response.tasks ) ? response.tasks : [];

     }));
   }
}
