import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {TaskPageComponent} from './task-page/task-page.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TaskPageComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
