import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationEnd,NavigationStart,NavigationError } from '@angular/router';
import {HomeService} from '../home/home.service';
import { TaskSharedService } from '../shared/task-shared.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public myTasksCount :number = 0;
  public  teamTasksCount :number= 0;

  constructor( private route: ActivatedRoute,private taskSharedService:TaskSharedService ) {

   }



  ngOnInit() {

    this.taskSharedService.centralTaskListRepoObservable.subscribe((tasks)=>{
      debugger;
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
/*
  this.homeService.myTasksCountAsObservable.subscribe((count)=> {
    this.myTasksCount =  count;

  });

  this.homeService.teamTasksCountAsObservable.subscribe((count)=> {
    this.teamTasksCount =  count;
  });
  */
  }



}
