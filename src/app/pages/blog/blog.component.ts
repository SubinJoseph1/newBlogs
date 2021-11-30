import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  eachBlog: any;
  id: any;
  url: any
  blogs: any;
  value: any;
  specificurl: any
  deleteurl:any;
  updatedetails:any;
  uid:any;
  constructor(private prvoius: Location, private activate: ActivatedRoute, private service: BlogserviceService, private router: Router) {
  }
  ngOnInit(): void {
    this.url = this.router.url;
    console.log("url",this.url)
    this.service.getDatas.map((blogurl: any) => {
      this.specificurl = blogurl.url;
      console.log("spec1111111", this.specificurl);
      if (this.specificurl == this.url) {
        this.blogs = blogurl;
        console.log("aaaaaa", this.blogs);
      }
    });
    // this.url = this.url.split('/');
    // this.id = this.url[2];
    // this.id = this.id.split("-");
    // this.value = this.id[1];
    // console.log("in", this.value);
    // console.log("id", this.id)
    // console.log("url", this.url)
    // this.id=this.activate.snapshot.params['id'];
    // console.log("id",this.id);
    // this.blogs=this.service.specifigblog(this.id);
    // console.log(this.blogs.url);
    // this.blogs=this.service.specifigblog(this.value);
    let aa = this.service.getDatas.url;
    console.log("new", aa);
    // this.blogs=this.activate.params.pipe(
    //   pluck(this.id),
    //   switchMap((url)=>
    //   this.service.specifigblog(url))
    // )
  }
  delete() {
    console.log("aa", this.id);
    this.service.getDatas.map((value:any,nurl: any) => {
      this.specificurl=value.url;
      console.log("specif",this.specificurl)
      if (this.specificurl == this.url) {
        this.blogs = nurl
        console.log("nnn",nurl)
        this.service.getDatas.splice(this.blogs,1);
        this.prvoius.back();
      }
      localStorage.setItem("blogs", JSON.stringify(this.service.getDatas))
    });
    // if (this.url == this.specificurl){
    // this.service.getDatas.splice(this.url,1);
    // localStorage.setItem("blogs",JSON.stringify(this.service.getDatas));
    // return this.service.getDatas;
    // }

    // this.service.delete(this.value);
    // this.prvoius.back()
  }
  // update(updateBlog: any) {
  //   console.log(updateBlog);
  //   this.router.navigateByUrl('addblog');
  //   this.service.update(updateBlog, this.url);
  // }
  update(){
    this.service.getDatas.map((updatevalue:any,ind:any)=>{
      this.updatedetails=updatevalue;
      //console.log("details",this.updatedetails);
      if(this.blogs==this.updatedetails){
        console.log("ud",this.updatedetails);
        this.uid=ind;
        console.log("iddddd",ind);
        this.service.update(this.updatedetails,ind);
        this.router.navigateByUrl('addblog');

      }
    });
  }
}


