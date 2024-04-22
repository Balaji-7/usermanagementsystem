import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  userlist : any
  constructor(private route:Router,public auth:AuthService){
    if(!(auth.loginstatus)){
      this.route.navigate(['login'])
    }
    else{
      this.auth.http.get("http://localhost:3000/").subscribe((data) =>{
        this.userlist = Object.values(data)
        console.log(this.userlist)
      })
    }
  }

  addUser(){
    window.alert("User is Successfully Added")
    this.route.navigate(['usercreation'])
    
  }

  updateUser(user:any){
    console.log("User List component",user)
    window.alert("User is Successfully Updated")
    this.route.navigate(['usercreation',{data: JSON.stringify(user)}])
  }

  deleteUser(){
    window.alert("User is Successfully Deleted ")
  }

}
