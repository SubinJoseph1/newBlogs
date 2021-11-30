import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {
    path:'',
    component:UserDetailsComponent
  },{
    path:'create-profile',
    component:UserprofileComponent
  },
  {
    path:'updateprofile',
    component:UserprofileComponent
  }

  // {
  //   path:'createprofile',
  //   component:UserprofileComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilemoduleRoutingModule { }
