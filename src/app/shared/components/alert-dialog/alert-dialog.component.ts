import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogModel } from './alert-dialog-model';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: AlertDialogModel) {

  }

  ngOnInit(): void {

  }

  onActionClick(event,callBackFn): void {
    debugger;
    callBackFn.call();
    this.dialogRef.close();
  }
}
