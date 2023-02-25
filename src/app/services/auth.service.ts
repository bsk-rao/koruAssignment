import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInBS : BehaviorSubject<boolean> = new BehaviorSubject(false)
  isLogged: Observable<boolean> = this.isLoggedInBS.asObservable()
  constructor() { }
  successfulLogIn() {
    this.isLoggedInBS.next(true);
  }
}
