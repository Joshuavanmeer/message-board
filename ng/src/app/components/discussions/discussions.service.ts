import { Injectable } from '@angular/core';
import { HttpService } from "../services/http.service";
import { Discussion } from "./models/discussion.model";
import { NotificationService } from "../notifications/notification.service";
import { AuthenticationService } from "../authentication/authentication.service";
import { FlashMessage } from "../notifications/models/flashmessage.model";
import { Router } from "@angular/router";

@Injectable()
export class DiscussionsService {

    // private discussionsSource: BehaviorSubject<any> = new BehaviorSubject(null);
    // discussions$ = this.discussionsSource.asObservable();
    discussions: Discussion[] = [];


    constructor(
        private httpService: HttpService,
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService,
        private router: Router
    ) { }


    // retrieves discussion data from db
    getDiscussions() {
        this.httpService.get(['http://localhost:3000/discussions'])
            .subscribe(res => {
                res.discussions.forEach(discussion => {
                    this.discussions.push(
                        new Discussion(
                            discussion.title,
                            discussion.body,
                            discussion.comments,
                            discussion.user.username,
                            discussion.user._id,
                            discussion._id
                        )
                    );
                });
            });
    }


    // getAmountOfDiscussions(): Discussion[] {
    //     return
    // }

    // be able to retrieve a number of discussions
    // be able to



    addNewDiscussion(discussion: Discussion) {
        const token = '?token=' + localStorage.getItem('jwt');
        this.httpService.post(['http://localhost:3000/discussions/new-discussion/' + token], discussion)
            .subscribe(
                res => {
                    discussion.discussionId = res.discussion._id;
                    this.discussions.unshift(discussion);
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
