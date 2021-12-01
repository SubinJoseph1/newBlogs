import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
  allBlogs:any
  constructor(private service:BlogserviceService,private router:Router) { }

  ngOnInit(): void {
    // this.allBlogs=this.service.getDatas;
    this.allBlogs=this.service.getDatas.slice().reverse();
  }
  readmore(blog:any){
   
    
    console.log(blog);
    this.router.navigateByUrl(blog);
    
  }

}
