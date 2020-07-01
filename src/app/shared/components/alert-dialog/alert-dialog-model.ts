export class AlertDialogModel
 {
  private _title: string;
  private _message: string;
  private _okFn: any;
  private _cancelFn: any;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
  get okFn(): any {
    return this._okFn;
  }

  set okFn(value: any) {
    this._okFn = value;
  }

  get cancelFn(): any {
    return this._cancelFn;
  }

  set cancelFn(value: any) {
    this._cancelFn = value;
  }


}
