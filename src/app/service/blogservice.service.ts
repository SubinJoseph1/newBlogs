import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  setDatas: any;
  getDatas: any;
  retrive: any;
  id1 = -1;
  userValue: any
  // value:boolean=false;
  id: any;
  updatevalue: any
  documents: any;
  constructor(private http: HttpClient) {

    this.retrive = localStorage.getItem("blogs");
    if (!this.retrive) {
      this.setData();
    }
    this.getData();

    this.userValue = JSON.parse(localStorage.getItem("userProfile") || "{}");
    console.log("a", this.userValue);

  }
  profilecheck(): boolean {
    if (localStorage.getItem("userProfile")) {
      return true;
    }
    return false;
  }
  fetchAllBlogs(): Observable<any> {
    console.log("Data fetched");
    return this.http.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2");
  }
  setData() {
    this.fetchAllBlogs().subscribe(data => {
      this.setDatas = data.articles;
      localStorage.setItem("blogs", JSON.stringify(this.setDatas));
    });
    this.getData();
  }
  getData() {
    this.getDatas = JSON.parse(localStorage.getItem("blogs") || "{}").reverse();
    // this.getDatas.reverse();
    // localStorage.setItem("blogs",JSON.stringify(this.getDatas));
    return this.getDatas;
    
  }
  formdata(formvalue: any) {

    if (this.id1 == -1) {
      this.getDatas.push(formvalue);
    } else {
      this.getDatas[this.id1] = formvalue;
    }
    // const existing=this.getDatas.find((x: { id: any; })=>x.id===formvalue.id);
    // if(existing){
    //   existing.id=formvalue.id
    // }
    // else
    // {
    // if(this.value){

    //   this.getDatas[this.id]=formvalue;
    // }else{
    //   this.getDatas.push(formvalue);
    // }
    // this.getDatas.push(formvalue);

    console.log(formvalue);
    localStorage.setItem("blogs", JSON.stringify(this.getDatas));
  }
  specifigblog(id: any) {
    console.log("surl", id);

    return this.getDatas[id];
  }
  // delete(url: any){
  //   console.log("sin",url);
  //   this.getDatas.splice(url,1);

  //   // this.getDatas.splice(id, 1);
  //   // Item to remove
  //   //  const index: number = this.getDatas.indexOf(id);
  //   //  if (index !== -1) {
  //   //      this.getDatas.splice(index, 1);
  //   //  }  
  //   // this.getDatas=this.getDatas.splice(this.getDatas.indexOf(id), 0); 
  //   // this.getDatas = this.getDatas.filter((item: any) => item != id);     
  //   localStorage.setItem("blogs", JSON.stringify(this.getDatas));
  //   return this.getDatas
  // }
  update(updateBlog: any, id: any) {
    console.log("serviceu", updateBlog);
    console.log("sid", id);
    this.updatevalue = updateBlog;
    this.id = id;
    this.id1 = id;
    console.log("id", this.id1)
  }
  profileService(profileData: any) {
    console.log("profile", profileData);
    localStorage.setItem("userProfile", JSON.stringify(profileData));


  }
  // update1(urll:any){
  //   console.log("aaaa",urll);

  //   return (localStorage.removeItem(`("blogs")/${urll}`))
  // }
}


