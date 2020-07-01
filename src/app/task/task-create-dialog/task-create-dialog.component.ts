import { Task } from './../task';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskModel } from '../task.model';
import { TaskSharedService } from '../../shared/services/task-shared.service';
import { ApplicationConfig } from '../../utils/appconfig';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrls: ['./task-create-dialog.component.css']
})
export class TaskCreateDialogComponent implements OnInit {

  newTaskObj : any ={};

  constructor(
    public dialogRef: MatDialogRef<TaskCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskSharedService : TaskSharedService,private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onOKClick(): void{

      let userObj = ApplicationConfig.LOGGED_IN_USER_DATA;
      let taskNgModel = this.newTaskObj;

      let newTask =  new TaskModel();

      /*** Assumed that loggin user is creating the task so Personal details are taken from userdetails directly... */
      newTask.creator= userObj['name'];
      newTask.isLeader= userObj['isLeader'];
      newTask.isGlobal= userObj['isGlobal'];


      newTask.text= taskNgModel['text'];
      newTask.isCompleted= taskNgModel['isComplted'];
      newTask.start= taskNgModel.start.toDateString();
      newTask.end= taskNgModel.end.toDateString();

      this.taskSharedService.addNewTask(newTask);

      this.dialogRef.close();

      this._snackBar.open(ApplicationConfig.TASK_ADD_MESSAGE,"OK");
  }
}
