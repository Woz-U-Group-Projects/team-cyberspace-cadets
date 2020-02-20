import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {  HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './userlogin/login.component';
import { RegisterComponent } from './userRegistration/register.component';
import { BlogsComponent } from './userblogs/blogs.component';
import { BlogComponent } from './regblog/blog.component';
import { UserlibaryComponent } from './userlibary/userlibary.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

let routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "blogs", component: BlogsComponent },
    { path: "blog", component: BlogComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        BlogsComponent,
        BlogComponent,
        UserlibaryComponent,
        UserprofileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})




export class AppModule { }


