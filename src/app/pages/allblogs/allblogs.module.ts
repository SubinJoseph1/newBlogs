import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllblogsRoutingModule } from './allblogs-routing.module';
import { AllblogsComponent } from './allblogs.component';


@NgModule({
  declarations: [
    AllblogsComponent
  ],
  imports: [
    CommonModule,
    AllblogsRoutingModule
  ]
})
export class AllblogsModule { }
