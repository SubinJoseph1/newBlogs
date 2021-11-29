import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap } from 'rxjs';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  eachBlog:any;
  id:any;
  blogs:any
  constructor(private activate:ActivatedRoute,private service:BlogserviceService,private router:Router) {

  }

  ngOnInit(): void {
    this.id=this.activate.snapshot.params['idx'];
    console.log("id",this.id);
    this.blogs=this.service.specifigblog(this.id);
    // this.blogs=this.activate.params.pipe(
    //   pluck(this.id),
    //   switchMap((url)=>
    //   this.service.specifigblog(url))
    // )

  }

  delete(){
    console.log("aa",this.id);
    this.service.delete(this.id);
  }
  update(updateBlog:any){
    console.log(updateBlog);
    this.router.navigateByUrl('addblog');
    this.service.update(updateBlog,this.id);
  }
}
