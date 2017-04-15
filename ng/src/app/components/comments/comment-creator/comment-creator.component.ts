import {Component, OnInit, Input} from '@angular/core';
import {Validators, FormBuilder, Form, FormGroup} from "@angular/forms";
import { Comment } from "../models/comment.model";
import {CommentsService} from "../comments.service";
import {Discussion} from "../../discussions/models/discussion.model";

@Component({
  selector: 'app-comment-creator',
  templateUrl: './comment-creator.component.html',
  styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent implements OnInit {


    private commentForm: FormGroup;
    @Input() private discussion: Discussion;


    constructor(
        private formBuilder: FormBuilder,
        private commentsService: CommentsService
    ) { }


    addNewComment(): void {
        if (this.commentForm.valid) {
            const newComment = new Comment(
                this.commentForm.value.comment
            );
            this.commentsService.addNewComment(newComment, this.discussion.discussionId);
        }
    }


    ngOnInit () {

        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.required]
        });

    }

}
