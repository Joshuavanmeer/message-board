import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./components/authentication/authentication.service";
import { DiscussionsService } from "./components/discussions/discussions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private discussionsService: DiscussionsService,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        // retreive messages from db
        this.discussionsService.getDiscussions();
        // check if already have a valid jsonwebtoken n localstorage
        this.authenticationService.checkAuthenticationState();
    }


}
