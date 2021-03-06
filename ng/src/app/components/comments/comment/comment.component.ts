import {Component, OnInit, Input} from '@angular/core';
import {Comment} from "../models/comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    @Input() private comment: Comment;

    constructor() { }

    ngOnInit() {
    }

}
