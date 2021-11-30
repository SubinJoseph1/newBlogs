import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private service:BlogserviceService,private router:Router) { }
  userCheck:any;
  
  
 
  ngOnInit(): void {
    this.userCheck=this.service.userValue;
    console.log("u",this.userCheck);
    // this.userCheck=this.service.userValue
  
    
   
  //  else{
    
    
  //  }
    
    
      
  }
  userUpdate(){
    this.router.navigateByUrl("profile/updateprofile");
  }
  create(){
    this.router.navigateByUrl('/profile/createprofile')
  }
}
