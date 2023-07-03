import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtinterceptInterceptor } from './jwtintercept.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    // FormGroup,
    // FormControl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:JwtinterceptInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

