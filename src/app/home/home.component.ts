import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router,public auth:AuthService){

  }
  userlist(){
    this.route.navigate(['userlist'])
  }
  adduser(){
    this.route.navigate(['usercreation'])
  }
}
