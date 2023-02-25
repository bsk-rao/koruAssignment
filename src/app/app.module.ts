import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ToastrModule} from 'ngx-toastr'
import { ToasterService } from './services/toaster.service';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    ToastrModule.forRoot({preventDuplicates : true}),
    AppRoutingModule
  ],
  providers: [ToasterService,UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
