import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilemoduleRoutingModule } from './profilemodule-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [
    UserprofileComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfilemoduleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfilemoduleModule { }
