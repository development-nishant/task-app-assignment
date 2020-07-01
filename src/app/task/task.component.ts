import { ApplicationConfig } from '../utils/appconfig';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';

import {MatSort} from '@angular/material/sort';
import {Task} from '../task/task';
import {TaskSharedService} from '../shared/services/task-shared.service';
import { TaskCreateDialogComponent } from './task-create-dialog/task-create-dialog.component';
import { filter } from 'rxjs/operators';
import { AlertDialogComponent } from '../shared/components/alert-dialog/alert-dialog.component';
import { AlertDialogModel } from '../shared/components/alert-dialog/alert-dialog-model';

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
    // loads data in grid store...
    this.dataSource = new MatTableDataSource(tasks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterTaskSelect (event:Event , fltr:any){

    // Filter function to filter data in grid...
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

    // Opens dialog to take new task entries...
    const creatNewDialog = this.matDialog.open(TaskCreateDialogComponent, {
      width: '500px',
      data: {title : ApplicationConfig.CREATE_NEW_TITLE}
    });

    creatNewDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onStatusChecked(event,row){

    // Send record to API to save as completed in database..

    /***In this POC, as we don't have API to update task in database , we are directly updating in grid data object
     * by using ngModel feature. The record points to same referene in memory so it is immediately reflected in grid and
     * to other subscribers of the task list observable
     */

     /***NgModel is commented in html to perform manual action to demonstrate the logic */

     // AlertDialogModel class is defined to take specific AlertDialogComponent related data to feed...
     let alertDialogModel = new AlertDialogModel();
     alertDialogModel.title = ApplicationConfig.CONFIRM_TITLE;
     alertDialogModel.message = ApplicationConfig.MARK_CONFIRM_DIALOG;
     alertDialogModel.okFn = ()=>{
         // Here in actual appication , we have to send task record to API to save it in database
          row.isCompleted = true;
          this._snackBar.open(ApplicationConfig.TASK_MARKED_DONE_MESSAGE,"OK");
     };
     alertDialogModel.cancelFn = ()=>{
         // Set ngModel value again as false;
          row.isCompleted = false;
          event.target.checked = false;
     };

    // Data passed to generic dialog component...
    this.matDialog.open(AlertDialogComponent, {
       data: alertDialogModel
     }
    );

  }
 }
