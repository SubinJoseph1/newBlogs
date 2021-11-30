import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  exform:any;
  blogmodle:any;
  updatevalue:any
  constructor(private service:BlogserviceService,private active:ActivatedRoute) { 
    this.updatevalue=service.updatevalue
  }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'url':new FormControl('',Validators.required),
      'title' : new FormControl('', Validators.required),
      'author' : new FormControl('', Validators.required),
      'description' : new FormControl('',Validators.required),
      'urlToImage' : new FormControl('',Validators.required),
      'publishedAt' : new FormControl('', Validators.required),
      'content' : new FormControl('', Validators.required),

    });
    this.exform.patchValue(this.updatevalue);
    
    }
    
    clicksub(exform:any) {

      this.blogmodle={
        url:exform.value.url,
        title:exform.value.title,
        author:exform.value.author,
        description:exform.value.description,
        urlToImage:exform.value.urlToImage,
        publishedAt:exform.value.publishedAt,
        content:exform.value.content,
      }
      this.exform.reset();
      this.service.formdata(this.blogmodle);
      
    }
   
    get url() {
      return this.exform.get('url');
    }
    get title() {
      return this.exform.get('title');
    }
    get author() {
      return this.exform.get('author');
    }
    get description() {
      return this.exform.get('description');
    }
    get urlToImage() {
      return this.exform.get('urlToImage');
    }
    get publishedAt() {
      return this.exform.get('publishedAt');
    }
    get content() {
      return this.exform.get('content');
    }
  }


