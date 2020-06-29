import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {LocalStorageService} from "../utils/localstorage.service";
import {MatDialog} from '@angular/material/dialog';
import {TASK_KEY} from "../utils/task-storage";
import {MatSort} from '@angular/material/sort';
import {Task} from '../task-page/task';


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  
  displayedColumns: string[] = ['text', 'start', 'end', 'creator', 'isGlobal', 'isLeader', 'isCompleted'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const taskList =  [ 
      {
        "text": "Make Test Plan for New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      },
      {
        "text": "Make Test Items For New Vehicle",
        "isGlobal": true,
        "isLeader": true,
        "creator": "Eoin Morgan",
        "isCompleted": false,
        "start":"2019-09-07",
        "end":"2019-09-10"
      },
      {
        "text": "Create plan for tire testing",
        "isGlobal": false,
        "isLeader": false,
        "creator": "Mithali Raj",
        "isCompleted": false,
        "start":"2019-09-08",
        "end":"2019-09-10"
      }];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(taskList);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): Task {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    text: "SAMPLE",
    isGlobal: true,
    isLeader: false,
    isCompleted : true,
    //color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    creator:"creator",
    start : "start",
    end:"end"

  };

}
