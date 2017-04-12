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
    private discussionsTotal: number;
    private pagesConfig: number[] = [];
    private activePage: number = 0;
    private itemsPerPage: number = 10;


    constructor(
        private discussionsService: DiscussionsService
    ) { }


    getPageNumber(pageNumber: number) {
        if (this.activePage === pageNumber) { return false; }
        this.activePage = pageNumber;
        this.discussionsService.getDiscussionsByRange(pageNumber * this.itemsPerPage, this.itemsPerPage);
    }


    ngOnInit() {

        // kickstart
        this.discussionsService.getDiscussionsByRange(0, this.itemsPerPage);
        this.discussionsService.getTotalDiscussions();


        // get sctream of discussions data
        this.discussionsService.discussions$.subscribe(res => {
            this.filteredDiscussions = res;
        });


        // set up paginator config
        this.discussionsService.discussionsTotal$.subscribe(total => {
            const totalPages = Math.ceil(total / this.itemsPerPage);
            for (var i = 0; i < totalPages; i++) {
                this.pagesConfig.push(i + 1);
            }
        });

    }

}
