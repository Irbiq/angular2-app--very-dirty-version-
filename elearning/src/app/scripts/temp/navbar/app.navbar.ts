import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../_services/authentication.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Component({
    selector: 'my-nav',
    templateUrl: './navbar.html',
    //styleUrls: [require('./login.css').toString()]

})
export class NavbarComponent implements OnInit {

    private isLogged: any ;
    private subscription: any;

    constructor(private authService: AuthenticationService,private route: Router) {}

    logoutClick(){
        this.authService.logout();
        this.route.navigate(['/login']);

    }

    ngOnInit(): void {

        this.subscription = this.authService.isAuthorized.subscribe( (e) => {
            this.isLogged = e
        });
        console.log(this.isLogged,"asdasd")
    }


}

