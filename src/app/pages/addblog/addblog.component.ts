import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
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
  constructor(private service:BlogserviceService) { 
    this.updatevalue=service.updatevalue
  }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'title' : new FormControl('', Validators.required),
      'description' : new FormControl('',Validators.required),
      'urlToImage' : new FormControl('',Validators.required),
      'publishedAt' : new FormControl('', Validators.required),
      'content' : new FormControl('', Validators.required),

    });
    this.exform.patchValue(this.updatevalue);
    
    }
    
    clicksub(exform:any) {

      this.blogmodle={
        title:exform.value.title,
        description:exform.value.description,
        urlToImage:exform.value.urlToImage,
        publishedAt:exform.value.publishedAt,
        content:exform.value.content,
      }
      this.exform.reset();
      this.service.formdata(this.blogmodle);
      
    }
    get title() {
      return this.exform.get('title');
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


