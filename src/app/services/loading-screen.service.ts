import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {
  private _loading: boolean = false;
  loadingStatus:Subject<boolean> = new Rx.Subject();


  get loading():boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
