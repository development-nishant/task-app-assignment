import { ApplicationConfig } from './../appconfig';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

import {MatDialog} from '@angular/material/dialog';

import {MatSort} from '@angular/material/sort';
import {Task} from '../task-page/task';
import {TaskSharedService} from '../shared/task-shared.service';
import { TastCreateNewDialogComponent } from './create-new/tast-create-new-dialog/tast-create-new-dialog.component';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})

export class TaskPageComponent implements OnInit {

  taskGridColumns: string[] = ApplicationConfig.TASK_GRID_COLUMNS;
  dataSource: MatTableDataSource<Task>;
  taskGridData : any = [];
  taskFilter: any = ApplicationConfig.TASK_TYPE_FILTER;
  taskTypeFilterValue : string ;

  filterSelectObj = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private taskSharedService : TaskSharedService,private matDialog:MatDialog) {

  }

  ngOnInit() {

    /* Following code will subcribe to previously stored tasklist observable...
    and display the data in grid..this will not trigger additional API call to fetch the data..*/


    this.taskSharedService.centralTaskListRepoObservable.subscribe((tasks)=>{
      this.loadDatainTaskGrid(tasks);
    }
    );

  }

  loadDatainTaskGrid(tasks : Task[]){
    this.dataSource = new MatTableDataSource(tasks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  filterTaskSelect (event:Event){
    debugger;

    switch(this.taskTypeFilterValue) {
      case "personal": {
          let personalTasks = this.taskSharedService.centralTaskListRepoObservable
         break;
      }
      case "global": {

         break;
      }
      case "leader": {

        break;
      }

      default: {

         break;
      }
   }
  }
  openCreateNewDialog(): void {
    debugger;
    const creatNewDialog = this.matDialog.open(TastCreateNewDialogComponent, {
      width: '250px',
      data: {}
    });

    creatNewDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}


