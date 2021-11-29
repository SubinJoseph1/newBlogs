import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-user-deatails',
  templateUrl: './user-deatails.component.html',
  styleUrls: ['./user-deatails.component.css']
})
export class UserDeatailsComponent implements OnInit {
  userDeatils:any;
  constructor(private service:BlogserviceService) { }

  ngOnInit(): void {
    this.userDeatils=this.service.userValue;
  }
  
}
