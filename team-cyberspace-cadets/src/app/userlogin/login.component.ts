import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";
import { Http2SecureServer } from 'http2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    [x: string]: any;

    public input: any;

    constructor(private router: Router) {
        this.input = {
            "email": "",
            "password": ""
        };
    }

    public login() {
        if(this.input.email && this.input.password) {
            let headers = new Headers({ "content-type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            this.http.post("http://localhost:3000/login", JSON.stringify(this.input), options)
                .map(result => result.json())
                .subscribe(result => {
                    this.router.navigate(["/blogs"], { "queryParams": result });
                });
        }
    }

}