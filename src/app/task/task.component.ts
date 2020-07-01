import { ApplicationConfig } from '../utils/appconfig';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

import {MatDialog} from '@angular/material/dialog';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

import {MatSort} from '@angular/material/sort';
import {Task} from '../task/task';
import {TaskSharedService} from '../shared/task-shared.service';
import { TaskCreateDialogComponent } from './task-create-dialog/task-create-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

  taskGridColumns: string[] = ApplicationConfig.TASK_GRID_COLUMNS;
  dataSource: MatTableDataSource<Task>;
  taskGridData : any = [];
  taskFilter: any = ApplicationConfig.TASK_TYPE_FILTER;
  taskTypeFilterValue : string ;

  filterSelectObj = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private taskSharedService : TaskSharedService,private matDialog:MatDialog,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit() {

    /* Following code will subcribe to previously stored tasklist observable...
    and display the data in grid..this will not trigger additional API call to fetch the data..*/

    this.taskSharedService.centralTaskListRepoObservable.subscribe((tasks)=>{

      this.loadDataInTaskGrid(tasks);
      this.taskGridData = tasks;
    }

    );
  }

  loadDataInTaskGrid(tasks : Task[]){

    this.dataSource = new MatTableDataSource(tasks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterTaskSelect (event:Event , fltr:any){

    let filteredData =[];

    switch(fltr.value) {

      case "personal": {

        filteredData =  this.taskGridData.filter((task :Task) =>{
          return (!task.isLeader && !task.isGlobal);
        });

         break;
      }
      case "global": {
        filteredData =  this.taskGridData.filter((task :Task) =>{
          return task.isGlobal;
        });

         break;
      }
      case "leader": {
        filteredData =  this.taskGridData.filter((task :Task) =>{
          return task.isLeader;
        });

        break;
      }

      default: {
         filteredData = this.taskGridData;
         break;
      }

   }
      this.loadDataInTaskGrid(filteredData);
  }
  openCreateNewDialog(): void {

    const creatNewDialog = this.matDialog.open(TaskCreateDialogComponent, {
      width: '500px',
      height: '400px',
      data: {}
    });

    creatNewDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onStatusChecked(event,row){

    if(row.isCompleted){
      // Send record to API to save as completed in database..

      /***In this POC, as we don't have API to update task in database , we are directly updating in grid data object
       * by using ngModel feature. The record points to same referene in memory so it is immediately reflected in grid and
       * to other subscribers of the task list observable
       */
      this._snackBar.open(ApplicationConfig.TASK_MARKED_DONE_MESSAGE,"OK");

    }else{
      //marked as not completed logic if any requirement...
    }

  }


}