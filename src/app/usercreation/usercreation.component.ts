import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})
export class UsercreationComponent implements OnInit {
  username = '';
  password = '';
  email = '';
  phoneNumber : number = 0;
  address = ''
  Street = ''
  City = ''
  State = ''
  pincode = ''
  userDetails : any
  errormsg = '';
  constructor(public route : Router,public router:ActivatedRoute) {
    
  }
  ngOnInit(){
    // this.router.queryParams.subscribe((data) => {
    //   console.log(data)
    // })
    this.userDetails = this.router.snapshot.paramMap.get('data')
    this.userDetails = JSON.parse(this.userDetails)
    console.log("user Details", this.userDetails)
    console.log("name", this.userDetails.name)
    this.username = this.userDetails.name
    this.email = this.userDetails.email
    this.phoneNumber = this.userDetails.phone
    this.Street = this.userDetails.address.street 
    this.City = this.userDetails.address.city
    this.State = this.userDetails.address.state
    this.pincode = this.userDetails.address.zip
  }
  Create(){
    window.alert("userName =>" + this.username)
    this.route.navigate(['userlist'])
  }
  userlist(){
    this.route.navigate(['userlist'])

  }
  update(){
    window.alert("UserDetails are Updated!!")
  }
}
