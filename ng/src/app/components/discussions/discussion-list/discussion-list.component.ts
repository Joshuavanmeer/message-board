import { Component, OnInit } from '@angular/core';
import { Discussion } from "../models/discussion.model";
import {DiscussionService} from "../discussion.service";

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {


    discussions: Discussion[] = [];


    constructor(
        private discussionService: DiscussionService
    ) { }


    ngOnInit() {
        this.discussions = this.discussionService.discussions;
    }

}
