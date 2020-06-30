export class TaskModel {
  private _text: string;
  private _isGlobal: boolean;
  private _isLeader: boolean;
  private _creator: string;
  private _isCompleted: boolean;

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get isGlobal(): boolean {
    return this._isGlobal;
  }

  set isGlobal(value: boolean) {
    this._isGlobal = value;
  }

  get isLeader(): boolean {
    return this._isLeader;
  }

  set isLeader(value: boolean) {
    this._isLeader = value;
  }

  get creator(): string {
    return this._creator;
  }

  set creator(value: string) {
    this._creator = value;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  set isCompleted(value: boolean) {
    this._isCompleted = value;
  }

  get start(): string {
    return this._start;
  }

  set start(value: string) {
    this._start = value;
  }

  get end(): string {
    return this._end;
  }

  set end(value: string) {
    this._end = value;
  }

  private _start: string;
  private _end: string;

  /*constructor(text,creator,isCompleted,isGlobal,isLeader,start,end) {

    this._text = text;
    this._creator= creator;
    this._isCompleted = isCompleted;
    this._isGlobal = isGlobal;
    this._isLeader = isLeader;
    this._start = start;
    this._end = end;

  }*/
}
