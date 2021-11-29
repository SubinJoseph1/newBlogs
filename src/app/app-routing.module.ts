import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'allblogs', loadChildren: () => import('./pages/allblogs/allblogs.module').then(m => m.AllblogsModule) },
 { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
 { path: 'addblog', loadChildren: () => import('./pages/addblog/addblog.module').then(m => m.AddblogModule) },
 { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
 { path: 'userDeatails', loadChildren: () => import('./pages/user-deatails/user-deatails.module').then(m => m.UserDeatailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
