import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogserviceService } from 'src/app/service/blogservice.service';
import { Profilecls } from 'src/app/models/blogmodel.model';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  profileForm: any;
  userCheck:any;
  userCheck1:any;
  updateprofile:any;
  profile = new Profilecls();
  constructor(private service: BlogserviceService) {
    this.updateprofile=this.service.userValue;
    
  }
  

  ngOnInit(): void {
  this.userCheck=localStorage.getItem("userProfile");
  this.profileForm = new FormGroup({
      'fName': new FormControl(this.profile.fName, Validators.required),
      'lName': new FormControl(this.profile.lName, Validators.required),
      'email': new FormControl(this.profile.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'mobileNo': new FormControl(this.profile.mobileNo, [Validators.required, Validators.pattern("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")]),
      'address': new FormControl(this.profile.address, Validators.required),
      'country': new FormControl(this.profile.country, Validators.required),
      'textarea': new FormControl(this.profile.textarea, Validators.required)
    });
    this.profileForm.patchValue(this.updateprofile);
  }
  profilesubmit(profileform: FormGroup) {
    this.profile.fName = profileform.value.fName;
    this.profile.lName = profileform.value.lName;
    this.profile.email = profileform.value.email;
    this.profile.mobileNo = profileform.value.mobileNo;
    this.profile.address = profileform.value.address;
    this.profile.country = profileform.value.country;
    this.profile.textarea = profileform.value.textarea;
    console.log(this.profile);
    this.service.profileService(this.profile);
    this.profileForm.reset();
    
  }

  get fName() {
    return this.profileForm.get('fName');
  }
  get lName() {
    return this.profileForm.get('lName');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get mobileNo() {
    return this.profileForm.get('mobileNo');
  }
  get address() {
    return this.profileForm.get('address');
  }
  get country() {
    return this.profileForm.get('country');
  }
  get textarea() {
    return this.profileForm.get('textarea');
  }

}