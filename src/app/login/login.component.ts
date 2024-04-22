import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  errormsg = '';

  constructor(private auth:AuthService,private router:Router) {

  }
  ngOnInit() {

  }
  Login(){
    if(this.username.trim().length ===0){
      this.errormsg = "Username is Required"
    }else if (this.password.trim().length ===0){
      this.errormsg = "Password is required"
    }
    else{
      this.errormsg = ''
      let res = this.auth.login(this.username,this.password);
      if(res === 200){
        this.router.navigate(['userlist'])
      }
      if(res === 403){
        this.errormsg = "Invalid Credentials"
      }
    }
  }
}
