import { Component, OnInit } from '@angular/core';
import { HomeService} from './home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService : HomeService , private httpClient: HttpClient) {

  }
  public globalTasks : any =[];
  public personalTasks : any =[];
  public leaderTasks : any =[];

  ngOnInit() {

   this.homeService.getTasksList().subscribe(resp => {
     this.globalTasks = resp['global'];
     this.personalTasks = resp['personal'];
     this.leaderTasks = resp['leader'];
     
    });
   
  }



}
