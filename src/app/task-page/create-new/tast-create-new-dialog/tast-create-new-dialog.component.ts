import { Task } from './../../task';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tast-create-new-dialog',
  templateUrl: './tast-create-new-dialog.component.html',
  styleUrls: ['./tast-create-new-dialog.component.css']
})
export class TastCreateNewDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TastCreateNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public taskObj: Task) {}
    ngOnInit(): void {
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
