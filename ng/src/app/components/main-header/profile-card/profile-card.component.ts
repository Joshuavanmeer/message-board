import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from "../../authentication/authentication.service";
import { Subscription } from "rxjs";
import { User } from "../../authentication/models/user.model";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit, OnDestroy {

    private dropdownIsOpen: boolean = false;
    private userSub: Subscription
    private user: User;


    constructor(
        private authenticationService: AuthenticationService
    ) { }


    toggleDropdown() {
        this.dropdownIsOpen = this.dropdownIsOpen === true ? false : true;
    }


    logout() {
        this.authenticationService.logout();
    }


    ngOnInit() {
        this.userSub = this.authenticationService.userDetails$.subscribe(userData => {
            this.user = userData;
        });

    }


    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}
