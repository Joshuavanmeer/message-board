import { Injectable } from '@angular/core';
import { HttpService } from "../services/http.service";
import { Discussion } from "./models/discussion.model";
import { NotificationService } from "../notifications/notification.service";
import { FlashMessage } from "../notifications/models/flashmessage.model";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { TimeStamp } from "../../models/timestamp.model";

@Injectable()
export class DiscussionsService {


    private discussionsSource: BehaviorSubject<any> = new BehaviorSubject(null);
    private discussionsTotalSource: Subject<any> = new Subject();
    private discussionByIdSource: Subject<any> = new Subject();


    discussions$ = this.discussionsSource.asObservable();
    discussionsTotal$ = this.discussionsTotalSource.asObservable();
    discussionById$ = this.discussionByIdSource.asObservable();

    discussions: Discussion[] = [];
    totalDiscussions: number;


    constructor(
        private httpService: HttpService,
        private notificationService: NotificationService,
        private router: Router
    ) { }


    // gets discussions chronologically within provided range
    getDiscussionsByRange(skip: number, limit: number) {
        const query = '?skip=' + skip + '&limit=' + limit;
        const url = 'http://localhost:3000/discussions/range' + query;
        this.getDiscussions(url);
    }


    getDiscussionById(id: string) {
        this.httpService.get(['http://localhost:3000/discussions/byid?id=' + id])
            .subscribe(res => {
                const transformedDiscussion = this.transformDiscussions([res.discussion], [])[0];
                this.discussionByIdSource.next(transformedDiscussion);
            });
    }


    // retrieves discussion data from db
    getDiscussions(discussionUrl: string) {
        this.httpService.get([discussionUrl])
            .subscribe(res => {
                this.discussions = this.transformDiscussions(res.discussions, []);
                this.discussionsSource.next(this.discussions);
            });
    }


    transformDiscussions(data: any, discussionArr: any) {
        for (var i = 0; i < data.length; i++) {
            discussionArr.push(
                new Discussion(
                    data[i].title,
                    data[i].body,
                    data[i].user.username,
                    data[i].user._id,
                    data[i]._id,
                    TimeStamp.convertTime(data[i].dates.created)
                )
            );
        }
        return discussionArr;
    }


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


    getTotalDiscussions() {
        this.httpService.get(['http://localhost:3000/discussions/totalDocs/'])
            .subscribe(res => {
                this.discussionsTotalSource.next(res.total);
            })
    }


}
