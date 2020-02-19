import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/core";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { UserlibaryComponent } from './userlibary/userlibary.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

let routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
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
        HttpModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
