import { NgModule } from '@angular/core';
import { TaskPageComponent} from "./task-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialComponentsModule} from "./material-components.module";
import {AddTaskModalComponent} from "./add-task/add-task.modal.component";

const routes: Routes = [
  { path: '', component: TaskPageComponent }
];

@NgModule({
  declarations: [
    TaskPageComponent,
    AddTaskModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialComponentsModule
  ],
  providers: [],
})
export class TaskPageModule { }
