import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string | undefined
  passWord: string | undefined
  validFormatOfPassword: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.validFormatOfPassword = this.checkValidFormatOfPassword();
    if(this.validFormatOfPassword) {
      this.router.navigate(['home']);
    }
  }

  onPasswordChange() {
    this.validFormatOfPassword = this.checkValidFormatOfPassword();
  }

  checkValidFormatOfPassword(): boolean {
    if(this.passWord) {
      if(this.passWord.length>8) {
        return true;
      }
    }

    return false;
  }
}
