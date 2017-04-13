import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from "../models/discussion.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

    @Input() discussion: Discussion;


    constructor(
        private router: Router
    ) { }


    navigateToDiscussion() {
        this.router.navigate(['/discussion', this.discussion.title], { queryParams: { id: this.discussion.discussionId }});
    }


    ngOnInit() {

    }

}
