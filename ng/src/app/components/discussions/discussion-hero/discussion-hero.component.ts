import { Component, OnInit, OnDestroy } from '@angular/core';
import { Discussion } from "../models/discussion.model";
import { DiscussionsService } from "../discussions.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-discussion-hero',
  templateUrl: './discussion-hero.component.html',
  styleUrls: ['./discussion-hero.component.css']
})
export class DiscussionHeroComponent implements OnInit, OnDestroy {


    private discussion: Discussion;
    private sub: Subscription


    constructor(
        private discussionsService: DiscussionsService
    ) { }


    ngOnInit() {

        this.sub = this.discussionsService.discussionById$.subscribe(res => {
            this.discussion = res;
        });

    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
