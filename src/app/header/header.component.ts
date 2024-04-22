import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginstatus = false
constructor(private router:Router,public auth:AuthService){
  this.loginstatus = this.auth.loginstatus
}
  goToHome(){
    this.router.navigate(['home']);
  }
  logout(){
    this.auth.logout();
  }
  login() {
    this.router.navigate(['login'])
  }
  about(){
    window.alert("This is user Management system")
  }
  contact(){
    window.alert("Contact via Email")
  }
}
