import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormControlStatus} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string | undefined
  passWord: string | undefined
  validFormatOfPassword: boolean = true;
  passwordValidationRegx : RegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')

  loginForm : FormGroup

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName : ['', [Validators.required]],
      passWord : ['', [Validators.required, Validators.minLength(8), this.passwordValidation]]
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.loginForm)
    if(this.loginForm.status== "VALID") {
      if(this.validFormatOfPassword) {
        this.router.navigate(['home']);
    }
   }
   else this.loginForm.markAsTouched()
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

  passwordValidation(control: FormControl) {
    const pass:string = control.value;
    if(!(pass.match('[A-Z]')) || !pass.match('[a-z]') || !pass.match('[0-9]') ) {
      return {invalidExpression : true}
    }
    return null;
  }
}
