import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './utils/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskCreateDialogComponent } from './task/task-create-dialog/task-create-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    TaskComponent,
    TaskCreateDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
