import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginstatus = false
  constructor(public http:HttpClient, private router:Router) { }

  login(uname:string,pword:string){
    if(uname === 'Balaji' && pword === '1234'){
      this.loginstatus = true
      return 200;
    }
    else{
      return 403;
    }
  }
  logout(){
    this.loginstatus = false
    this.router.navigate(['login']);
  }
}
