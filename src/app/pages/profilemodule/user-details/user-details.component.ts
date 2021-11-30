import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private service: BlogserviceService, private router: Router) { }
  userCheck: any;
  profilecheck:boolean=false;


  ngOnInit(): void {
    this.profilecheck = this.service.profilecheck();
    this.userCheck = this.service.userValue;
    console.log("u", this.userCheck);
    if(this.profilecheck) {
      this.userCheck = this.service.userValue();
    }
  }
 
  userUpdate() {
    this.router.navigateByUrl("profile/updateprofile");
   }
  // create() {
  //   this.router.navigateByUrl('/profile/createprofile')
  // }
}
