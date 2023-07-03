import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  _url = 'localhost:3000/users'

  constructor(private httpclient: HttpClient) { }

  logindata() {
    this.httpclient.post(this._url, {})
  }

  IsloggedIn(): boolean {
    return !!localStorage.getItem('token');    //if we use boolean we can use  exclamation marks !! this will represent true or false n we van use in place of any statement 
  }

  logout(){
    localStorage.clear();
  }






}




