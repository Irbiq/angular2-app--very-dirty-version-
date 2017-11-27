import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

    ngOnInit(): void {
       //
    }


    constructor(private router: Router ,private authService : AuthenticationService) {
        }

    private isAuthorized = false

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.isAuthorized.subscribe( e => this.isAuthorized = e );
        if (this.isAuthorized) {
            // logged in so return tru  `e
            return true;

        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}