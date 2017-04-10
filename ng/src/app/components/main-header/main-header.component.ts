import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from "../authentication/authentication.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {

    isLoggedIn: boolean;
    isLoggedInSub: Subscription;


    constructor(
        private authenticationService: AuthenticationService
    ) { }


    ngOnInit() {
        // set the state of the logged in user
       this.isLoggedInSub = this.authenticationService.isLoggedIn$.subscribe(
            (res: boolean) => {
                this.isLoggedIn = res;
            }
        );
    }


    ngOnDestroy() {
        this.isLoggedInSub.unsubscribe();
    }

}
