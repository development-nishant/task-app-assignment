import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskSharedService } from '../shared/services/task-shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public globalTasks : any =[];
  public personalTasks : any =[];
  public leaderTasks : any =[];

  constructor(private taskSharedService : TaskSharedService ,private httpClient: HttpClient) {

  }

  ngOnInit() {

    //this will trigger http API call to fetch all task list...

    /*this.taskSharedService.getAllTasks().subscribe(resp=>{
      console.log("Tasks loaded on application level!");
    });*/


    // Previously task list array will be observed to separate the tasks based on the type...
    this.taskSharedService.centralTaskListRepoObservable.subscribe((tasks)=>{

      // Reset required when user navigates back from tasks screen...
      this.resetTaskLists();
      // filter functionsa can be used but that will 3x iterations for each type.. so forEach used ..

      if(tasks){

      tasks.forEach(task =>{

        if(task.isGlobal){
          this.globalTasks.push(task);
        }
        if(task.isLeader){
          this.leaderTasks.push(task);
        }
        if(!task.isGlobal && !task.isLeader){
          this.personalTasks.push(task);
        }
      });
    }
    });

  }
  resetTaskLists(){
    this.globalTasks = [];
    this.personalTasks =[];
    this.leaderTasks=[];
  }

}
