import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDeatailsComponent } from './user-deatails.component';

const routes: Routes = [{ path: '', component: UserDeatailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDeatailsRoutingModule { }
