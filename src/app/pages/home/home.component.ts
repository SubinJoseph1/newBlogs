import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeBlogs:any;
 
  constructor(private service:BlogserviceService,private router:Router) { }
url:any
  ngOnInit(): void {
      this.homeBlogs=this.service.getDatas.slice().reverse();
      console.log("home",this.homeBlogs);
    }
  readmore(blog:any){
  console.log(blog);
    this.router.navigateByUrl(blog);
    }
  }
