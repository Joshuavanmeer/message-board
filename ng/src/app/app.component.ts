import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./components/authentication/authentication.service";
import { DiscussionService } from "./components/discussions/discussion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private discussionService: DiscussionService,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        // retreive messages from db
        this.discussionService.getDiscussions();
        // check if already have a valid jsonwebtoken n localstorage
        this.authenticationService.checkAuthenticationState();
    }


}
