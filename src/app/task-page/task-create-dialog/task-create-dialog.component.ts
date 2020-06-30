import { Task } from './../task';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskModel } from '../task.model';
import { TaskSharedService } from '../../shared/task-shared.service';
import { ApplicationConfig } from '../../appconfig';

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrls: ['./task-create-dialog.component.css']
})
export class TaskCreateDialogComponent implements OnInit {

  newTaskObj : any = {};

  constructor(
    public dialogRef: MatDialogRef<TaskCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public taskObj: Task,
    private taskSharedService : TaskSharedService
    ) {}

    ngOnInit(): void {
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onOKClick(): void{
    let userObj = ApplicationConfig.LOGGED_IN_USER_DATA;
    let tsk = this.newTaskObj;
    debugger;
    let newTaskObj = {
      "text": "Newly created task",
    "isGlobal": userObj.isGlobal,
    "isLeader":userObj.isGlobal,
    "creator": userObj.name,
    "isCompleted": false,
    "start":"2019-09-07",
    "end":"2019-09-10"}

    this.taskSharedService.addNewTask(newTaskObj);
  }
}
