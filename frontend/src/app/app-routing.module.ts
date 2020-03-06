import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { userlibraryComponent } from './team-cyberspace-cadets/components/userlibrary/userlibrary.component';
import { BlogsComponent } from './team-cyberspace-cadets/components/Blogs/Blogs.component';
import { loginComponent } from './team-cyberspace-cadets/components/login/login.component';
import { userprofileComponent } from './team-cyberspace-cadets/components/userprofile/userprofile.component';
import { registerComponent } from './team-cyberspace-cadets/components/register/register.component';
import { blogComponent } from './team-cyberspace-cadets/components/blog/blog.component';




const routes: Routes = [
 
  {
    path: 'userlibrary',
    component: userlibraryComponent
  },

  {
    path: 'Blogs',
    component: BlogsComponent
  },

  {
    path: 'login',
    component: loginComponent
  },

  {
    path: 'userprofile',
    component: userprofileComponent
  },

  {
    path: 'register',
    component: registerComponent
  },

  {
    path: 'blog',
    component: blogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
