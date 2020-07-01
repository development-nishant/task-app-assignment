import { Component, OnInit } from '@angular/core';
import { TaskSharedService } from '../shared/services/task-shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public myTasksCount :number = 0;
  public  teamTasksCount :number= 0;

  constructor( private taskSharedService:TaskSharedService ) {

   }

  ngOnInit() {

      /***
     This will trigger http API call to fetch all task list...Ideally this should be part of homecomponent
       but in this assignment POC for demonstration purpose , I have called from one level up component so that data
       will not be overriden by task.json in home screen after navigating back from add new task screen
       */
     this.taskSharedService.getAllTasks().subscribe(tasks=>{
      console.log("Tasks loaded on application level!");
    });

    /*** Subscriber which observes tasks list array to increase counter after adding new task*/
    this.taskSharedService.centralTaskListRepoObservable.subscribe((tasks)=>{
        this.myTasksCount = 0;
        this.teamTasksCount = 0;

        tasks.forEach(obj=>{

        if(obj.isGlobal){
            this.teamTasksCount ++;
        }
        if(!obj.isGlobal && !obj.isLeader){
            this.myTasksCount++;
       }
    });
    }

    );
  }
}
