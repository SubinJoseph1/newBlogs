import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllblogsComponent } from './allblogs.component';

const routes: Routes = [{ path: '', component: AllblogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllblogsRoutingModule { }
