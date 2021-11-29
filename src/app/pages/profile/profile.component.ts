import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profilecls } from '../models/blogmodel.model';
import { BlogserviceService } from 'src/app/service/blogservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: any;
  profile = new Profilecls();
  constructor(private service: BlogserviceService) {

  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'fName': new FormControl(this.profile.fName, Validators.required),
      'lName': new FormControl(this.profile.lName, Validators.required),
      'email': new FormControl(this.profile.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'mobileNo': new FormControl(this.profile.mobileNo, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl(this.profile.address, Validators.required),
      'country': new FormControl(this.profile.country, Validators.required),
      'textarea': new FormControl(this.profile.textarea, Validators.required)
    });
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

