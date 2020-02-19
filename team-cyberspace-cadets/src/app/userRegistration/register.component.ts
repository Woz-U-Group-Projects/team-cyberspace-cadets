import { Component } from '@angular/core';
import { Router } from "@angular/router";
import "rxjs/Rx";
import { core } from '@angular/compiler';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    [x: string]: any;

    public input: any;

    public constructor(private router: Router) {
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        };
    }

    public register() {
        if(this.input.email && this.input.password) {
            let headers = new Headers({ "content-type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            this.http.post("http://localhost:3000/account", JSON.stringify(this.input), options)
                .map(result => result.json())
                .subscribe(result => {
                    this.router.navigate(["/login"]);
                });
        }
    }

}