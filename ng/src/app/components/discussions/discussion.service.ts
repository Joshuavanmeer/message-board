import { Injectable } from '@angular/core';
import { HttpService } from "../services/http.service";
import { Discussion } from "./models/discussion.model";
import { NotificationService } from "../notifications/notification.service";
import { AuthenticationService } from "../authentication/authentication.service";
import { FlashMessage } from "../notifications/models/flashmessage.model";
import { Router } from "@angular/router";

@Injectable()
export class DiscussionService {


    discussions: Discussion[] = [];


    constructor(
        private httpService: HttpService,
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService,
        private router: Router
    ) { }

    // retrieves discussion data from db
    getDiscussions() {
        // this.discussions = this.httpService.get([])
    }



    addNewDiscussion(discussion: Discussion) {
        const token = '?token=' + localStorage.getItem('jwt');
        this.httpService.post(['http://localhost:3000/discussions/new-discussion/' + token], discussion)
            .subscribe(
                res => {
                    discussion.discussionId = res.discussion._id;
                    discussion.username = res.discussion.user.username;
                    this.discussions.push(discussion);
                    this.notificationService.showFlashMessage(
                        new FlashMessage(
                            res.type,
                            res.message,
                            5000
                        )
                    );
                    this.router.navigate(['/']);
                },
                err => {
                    this.notificationService.showFlashMessage(
                        new FlashMessage(
                            err.type,
                            err.message,
                            5000
                    ));
                }
            )
    }


}
