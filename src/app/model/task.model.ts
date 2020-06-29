export class Task {
  text: string;
  isGlobal: boolean;
  isLeader: boolean;
  creator: string;
  isCompleted: boolean;
  start: string;
  end: string;

  constructor(formData) {
    this.text = formData.text;
    // this.isGlobal = Pick from static config
    // this.isLeader = Pick from static config
    // this.creator = Pick from static config
    this.isCompleted = formData.isCompleted;
    this.start = formData.start;
    this.end = formData.end;
  }
}
