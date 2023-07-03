import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private Router: Router, private HttpClient: HttpClient) { }

  signup = new FormGroup({
    FirstName: new FormControl(),
    LastName: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    number: new FormControl(),
    email: new FormControl(),

  })

  signuppage() {
    // return console.log (signup)  
    this.HttpClient.post("http://localhost:3000/users", this.signup.value)
      .subscribe(ret => {
        console.log("see1", this.signup.value),
        //using localstorage for save data  only below two line
        console.log(localStorage.setItem("userdata", JSON.stringify(this.signup.value.email)))
        console.log(localStorage.setItem("userdata", JSON.stringify(this.signup.value.password)))
        this.signup.reset(),
          this.Router.navigate(["login"])
      }

      )

  }
}
