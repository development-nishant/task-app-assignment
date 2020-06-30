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

  newTaskObj : any ={};

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
    let taskNgModel = this.newTaskObj;
    let startd = taskNgModel.start.toDateString();
    let endd = taskNgModel.end.toDateString();

      let newTask =  new TaskModel();
      newTask.text= taskNgModel['text'];
      newTask.creator= userObj['name'];
      newTask.isCompleted= taskNgModel['text'];
      newTask.isLeader= userObj['isLeader'];
      newTask.isGlobal= userObj['isGlobal'];
      newTask.start= startd;//taskNgModel['text'];
      newTask.end= endd;//taskNgModel['text'];
      debugger;
      this.taskSharedService.addNewTask(newTask);

      this.dialogRef.close();
  }
}
