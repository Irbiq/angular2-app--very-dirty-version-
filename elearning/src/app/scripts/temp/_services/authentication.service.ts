import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject } from "rxjs";
import { $$observable } from "rxjs/symbol/observable";

@Injectable()
export class AuthenticationService {

    private  Authorized :Subject<boolean> = new Subject<boolean>() ;
    constructor(private http: Http) {
        this.Authorized.next(false);
    }

    get isAuthorized() {
        return this.Authorized.asObservable();
        /*return Observable.of({
            id:"123";
        });*/
    }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                this.Authorized.next(true) ;
                console.log(this.isAuthorized);

                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out

        this.Authorized.next(false) ;
        console.log(this.isAuthorized);

        localStorage.removeItem('currentUser');
    }
}