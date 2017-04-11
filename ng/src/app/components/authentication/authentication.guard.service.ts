import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from "./authentication.service";


@Injectable()
export class AuthenticationGuardService implements CanActivate {


    private authorized: boolean = false;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}


    canActivate(): boolean {
        this.authenticationService.isLoggedIn$.subscribe(res => {
            this.authorized = res;
        });
        if (!this.authorized) return true;
        this.router.navigate(['/dashboard']);
        return false;
    }

}
