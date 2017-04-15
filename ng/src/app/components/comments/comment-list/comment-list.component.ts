import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { CommentsService } from "../comments.service";
import { Subscription } from "rxjs";
import { DiscussionsService } from "../../discussions/discussions.service";

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {

    private comments: any;
    private discussionId: string;
    private discussionIdSub: Subscription
    private commentListSub: Subscription

    constructor(
        private commentsService: CommentsService,
        private discussionsService: DiscussionsService
    ) { }


    ngOnInit() {

        this.discussionIdSub = this.discussionsService.discussionById$.subscribe(retrievedDiscussion => {
            this.discussionId = retrievedDiscussion.discussionId;
            this.commentsService.getComments(this.discussionId);
        });

        this.commentListSub = this.commentsService.commentList$.subscribe(retrievedComments => {
            console.log(retrievedComments);
            this.comments = retrievedComments;
        });



    }

    ngOnDestroy() {
        this.discussionIdSub.unsubscribe();
        this.commentListSub.unsubscribe();
    }

}
