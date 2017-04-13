import { Component, OnInit, OnDestroy } from '@angular/core';
import { Discussion } from "../models/discussion.model";
import { ActivatedRoute } from "@angular/router";
import { DiscussionsService } from "../discussions.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-discussion-page',
  templateUrl: './discussion-page.component.html',
  styleUrls: ['./discussion-page.component.css']
})
export class DiscussionPageComponent implements OnInit, OnDestroy {


    private discussion: Discussion;
    private sub: Subscription;


    constructor(
        private activatedRoute: ActivatedRoute,
        private discussionsService: DiscussionsService
    ) { }


    ngOnInit() {

        this.sub = this.discussionsService.discussionById$.subscribe(retrievedDiscussion => {
            this.discussion = retrievedDiscussion;
            console.log(this.discussion);
        });

        // retrieve discussion data based on id
        this.activatedRoute.queryParams.subscribe(res => {
            this.discussionsService.getDiscussionById(res.id);
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
