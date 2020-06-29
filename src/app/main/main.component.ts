import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationEnd,NavigationStart,NavigationError } from '@angular/router';
import {HomeService} from '../home/home.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private route: ActivatedRoute,private homeService:HomeService ) {
   
   }
  public pageTitle : string = "Home";
  public myTasksCount :number = 0;
  public  teamTasksCount :number= 0;
  
  ngOnInit() {
  this.homeService.myTasksCountAsObservable.subscribe((count)=> {  
    this.myTasksCount =  count;
    
  });

  this.homeService.teamTasksCountAsObservable.subscribe((count)=> {  
    this.teamTasksCount =  count;
  });
  }

  
  
}
