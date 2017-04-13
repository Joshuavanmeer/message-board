import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from "./discussions.service";
import { Discussion } from "./models/discussion.model";
import {ActivatedRoute, Router} from "@angular/router";

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
        private discussionsService: DiscussionsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }


    getPageNumber(pageNumber: number) {
        console.log('i want page:', pageNumber);
        if (this.activePage === pageNumber) { return false; }
        this.activePage = pageNumber;
        this.router.navigate(['/'], { queryParams: { page: pageNumber }});
    }


    initDiscussionsData() {
        //const skip = this.activePage > 1 ? this.activePage * this.itemsPerPage : 0;
        const skip = (this.activePage * this.itemsPerPage) - this.itemsPerPage;
        this.discussionsService.getDiscussionsByRange(skip, this.itemsPerPage);
    }


    initDiscussionsTotal() {
        this.discussionsService.getTotalDiscussions();
    }


    ngOnInit() {

        // keeps an eye on parameter changes
        this.route.queryParams.subscribe(param => {
            this.activePage = param.page;
            this.initDiscussionsData();
        });


        // kickstart
        this.initDiscussionsData();
        this.initDiscussionsTotal();


        // get stream of discussions data
        this.discussionsService.discussions$.subscribe(res => {
            this.filteredDiscussions = res;
        });


        // set up paginator config
        this.discussionsService.discussionsTotal$.subscribe(total => {
            const totalPages = Math.ceil(total / this.itemsPerPage);
            for (var i = 1; i < totalPages + 1; i++) {
                this.pagesConfig.push(i);
            }
        });

    }

}
