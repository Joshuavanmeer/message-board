import { Component, OnInit } from '@angular/core';
import {DiscussionsService} from "./discussions.service";
import {Discussion} from "./models/discussion.model";

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {


    private discussions: Discussion[];
    private filteredDiscussions: Discussion[];
    private activePage: number = 0;


    constructor(
        private discussionsService: DiscussionsService
    ) { }


    ngOnInit() {
        this.filteredDiscussions= this.discussionsService.discussions;
    }

}
