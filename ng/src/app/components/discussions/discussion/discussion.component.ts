import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

    @Input() title: string;
    @Input() body: string;
    @Input() username: string;

    @Output() navigateToDiscussionEv: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
