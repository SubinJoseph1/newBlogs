import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddblogRoutingModule } from './addblog-routing.module';
import { AddblogComponent } from './addblog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddblogComponent
  ],
  imports: [
    CommonModule,
    AddblogRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddblogModule { }
