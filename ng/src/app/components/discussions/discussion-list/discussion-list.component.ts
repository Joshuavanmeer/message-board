import {Component, OnInit, Input} from '@angular/core';
import { Discussion } from "../models/discussion.model";
import { DiscussionsService } from "../discussions.service";

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {


    @Input() discussions: Discussion[];


    constructor(
        private discussionsService: DiscussionsService
    ) { }


    ngOnInit() {

    }

}
