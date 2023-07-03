import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Token } from '@angular/compiler';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';

@Injectable()
export class JwtinterceptInterceptor implements HttpInterceptor {

  constructor(private AuthService:AuthService , private Router:Router)  {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const recivedtoken = localStorage.getItem('token')
    console.log(recivedtoken)
    if(this.AuthService.IsloggedIn()){ request = request.clone({
      setHeaders: {
        Authorization: 'Bearer' + recivedtoken    /// Basic and Bearer
      }
    })}
  return next.handle(request).pipe(
    catchError((err:HttpErrorResponse)=>{
      let errMsg='this is the backend ';
      if (err instanceof HttpErrorResponse){
        if(err.status===401){
          this.AuthService.logout();
          this.Router.navigate(['login']);
          
        }
        else if(err.status===404){
            
        }
        else if(err.status===500){
            
        }
        else{}
      }
      return throwError(errMsg)
    })
  );


  }
}

