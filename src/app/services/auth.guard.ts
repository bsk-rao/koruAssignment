import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {Observable,pipe,map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.checkIsLoggedIn()
  }

  checkIsLoggedIn() {
    return this.authService.isLogged.pipe(map((result)=>{
      if(result) {
        return true;
      }
      else this.router.navigate(['login']);
      return false;
    }))
  }
}
