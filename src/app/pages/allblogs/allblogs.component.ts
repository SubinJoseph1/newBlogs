import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
  allBlogs:any
  constructor(private service:BlogserviceService) { }

  ngOnInit(): void {
    this.allBlogs=this.service.getDatas;
  }

}
