import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormControlStatus} from '@angular/forms'
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private authService: AuthService) {
    this.loginForm = this.fb.group({
      userName : ['', [Validators.required]],
      passWord : ['', [Validators.required, Validators.minLength(8), this.passwordValidation]]
    })
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.loginForm)
    if(this.loginForm.status== "VALID") {
        this.authService.successfulLogIn();
        this.router.navigate(['home']);
   }
   else this.loginForm.markAsTouched()
  }

  passwordValidation(control: FormControl) {
    const pass:string = control.value;
    if(!(pass.match('[A-Z]')) || !pass.match('[a-z]') || !pass.match('[0-9]') ) {
      return {invalidExpression : true}
    }
    return null;
  }
}
