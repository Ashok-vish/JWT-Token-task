import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private http: HttpClient) {
    this.http.get("http://localhost:5000/users").subscribe(res=>{
      console.log("login form"  , res)
    })


   }
 

}
