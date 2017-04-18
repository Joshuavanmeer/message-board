import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

    @Input() pages: number[];
    @Input() activePage: number;
    @Output() private pageNumberRequestEv: EventEmitter<number> = new EventEmitter();


    requestPage(pageNumber: number) {
        this.pageNumberRequestEv.emit(pageNumber);
    }


    constructor() { }

    ngOnInit() {
    }

}
