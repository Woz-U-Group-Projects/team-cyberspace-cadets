import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  UserlibaryComponent } from './userlibary/userlibary.component';
import { BlogsComponent } from './userBlogs/Blogs.component';
import { LoginComponent } from './userlogin/login.component';
import {  UserprofileComponent } from './userprofile/userprofile.component';
import { RegisterComponent } from './userRegistration/register.component';
import { BlogComponent } from './regblog/blog.component';




const routes: Routes = [
 
  {
    path: 'userlibrary',
    component:  UserlibaryComponent
  },

  {
    path: 'Blogs',
    component: BlogsComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'userprofile',
    component:  UserprofileComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'blog',
    component: BlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
