import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { phl } from '@angular-extensions/pretty-html-log'

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers:[AuthService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldCheckDefaultValueOfLoginForm',()=>{
    var loginForm = component.loginForm
    //Checking Form Controls
    expect(component.loginForm).toBeTruthy()
    expect(loginForm.controls['userName']).toBeTruthy();
    expect(loginForm.controls['passWord']).toBeTruthy();

    //Checking Form Values
    expect(loginForm.controls['userName'].value).toBe('');
    expect(loginForm.controls['passWord'].value).toBe('');
  })

  it('shouldCheckForPassWordValidation',()=>{
    var loginForm = component.loginForm;
    loginForm.controls['userName'].setValue('Admin');
    loginForm.controls['passWord'].setValue('WhoAreYou');
    expect(loginForm.status).not.toBe("VALID");
    expect(component.passwordValidation(loginForm.controls['passWord'] as FormControl)).toEqual({invalidExpression : true})
    loginForm.controls['passWord'].setValue('WhoAreYou123');
    expect(loginForm.status).toBe("VALID")
    expect(component.passwordValidation(loginForm.controls['passWord'] as FormControl)).toEqual(null)
  })

  it('shouldCheckLoginFormTouched',()=>{
    debugger;
    expect(component.loginForm.touched).toBeFalsy();
    component.onLogin();
    expect(component.loginForm.touched).toBeTruthy();
  })
  it('should check login button in html',()=>{
    const element: HTMLDivElement = fixture.nativeElement
    element && phl(element)
    const button: HTMLButtonElement | null  = element.querySelector('#login')
    expect(button?.textContent).toEqual("Login")
    expect(button?.className).toEqual("btn btn-danger");
  })

});
