import { Component, HostBinding, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  isdarktheme=false                //using for theme change
  
  next:any
  loginform:any=FormGroup
 
 constructor(private http:HttpClient,private formbuilder:FormBuilder , private Router:Router)
 {
  console.log("Loin compo ")
 }



//  theme({checked}:MatSlideToggleChange){
//   this.isdarktheme=(checked)
//  }



 ngOnInit(){
  
  this.loginform = this.formbuilder.group({
    username:[''],
    password:['']

  })

  

 
   
 }

   
 
  // console.log("fevtrtt")
 //  username: string = '';
 //   password: any = '';
 

  login(loginform:any) {
    // console.log(this.username )
    // console.log(signform.value.emailfeild)
    // console.log(signform.value.passwardfeild)
    // console.log(signform)

    this.http.post<any>('http://localhost:5000/users/authenticate', this.loginform.value).subscribe(res=>{
      console.log(res);
      
      console.log((localStorage.setItem('logindata' , JSON.stringify(res.token))))
      // (localStorage.setItem('logindata' , JSON.stringify(this.loginform.password.value)));
      
      // console.log(localStorage.setItem('logindata' , JSON.stringify(this.loginform.token.value)))
      this.Router.navigate (['profile'])
      
     
      
    })   
  }
}



