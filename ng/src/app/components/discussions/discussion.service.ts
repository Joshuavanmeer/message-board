import { Injectable } from '@angular/core';
import { HttpService } from "../services/http.service";
import { Discussion } from "./models/discussion.model";
import { NotificationService } from "../notifications/notification.service";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable()
export class DiscussionService {


    discussions: Discussion[] = [];


    constructor(
        private httpService: HttpService,
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService
    ) { }


    addNewDiscussion(discussion: Discussion) {
        const token = '?token=' + localStorage.getItem('jwt');
        this.httpService.post(['http://localhost:3000/discussions/new-discussion/' + token], discussion)
            .subscribe(
                res => {
                    discussion.discussionId = res.discussion._id;
                    this.discussions.push(discussion);
                    console.log(this.discussions);
                },
                err => {
                    console.log(err)
                }
            )
    }


}
