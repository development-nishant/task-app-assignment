import { Task } from './task';
export class TaskModel {

  text: string;
  isGlobal: boolean;
  isLeader: boolean;
  creator: string;
  isCompleted: boolean;
  start: string;
  end: string;


  constructor(text,creator,isGlobal,isLeader,isCompleted,start,end) {

  this.text =  text;
  this.creator =  creator;
  this.isGlobal =  isGlobal;
  this.isLeader =  isLeader;
  this.isCompleted =  isCompleted;
  this.start =  start;
  this.end =  end;
  }
}
