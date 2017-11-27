import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "../_services/authentication.service";
/*
import { AlertService, AuthenticationService } from '../_services/index';*/

@Component({

    selector: "my-login",
    templateUrl: 'login.component.html',
   // styles:[require('./login.css').toString()]

})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    classView:string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        /*private alertService: AlertService*/) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  //  private alertService;

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(["/"]);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }
}
