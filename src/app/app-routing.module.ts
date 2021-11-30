import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'allblogs', loadChildren: () => import('./pages/allblogs/allblogs.module').then(m => m.AllblogsModule) },
 { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
 { path: 'addblog', loadChildren: () => import('./pages/addblog/addblog.module').then(m => m.AddblogModule) },
 //{ path: '', loadChildren: () => import('./pages/addblog/addblog.module').then(m => m.AddblogModule) },
  {path:'profile',loadChildren:()=>import('./pages/profilemodule/profilemodule.module').then(m=>m.ProfilemoduleModule)}
//{ path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
