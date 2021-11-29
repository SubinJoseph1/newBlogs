import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDeatailsRoutingModule } from './user-deatails-routing.module';
import { UserDeatailsComponent } from './user-deatails.component';


@NgModule({
  declarations: [
    UserDeatailsComponent
  ],
  imports: [
    CommonModule,
    UserDeatailsRoutingModule
  ]
})
export class UserDeatailsModule { }
