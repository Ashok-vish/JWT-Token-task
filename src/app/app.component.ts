import { Component, HostBinding } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

// export class User{
//   username?:string;
//   password?:string;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'JWT-Task';
  isdarktheme=false

  @HostBinding('class')
  get thememode(){
    return this.isdarktheme ? 'theme-dark': 'theme-light'
  }
  theme({checked}:MatSlideToggleChange){
    this.isdarktheme=(checked)
  }
}
