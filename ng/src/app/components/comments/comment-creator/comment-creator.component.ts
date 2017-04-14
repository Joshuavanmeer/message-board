import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, Form, FormGroup} from "@angular/forms";
import {Comment} from "../models/comment.model";

@Component({
  selector: 'app-comment-creator',
  templateUrl: './comment-creator.component.html',
  styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent implements OnInit {


    private commentForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,

    ) { }

    addNewComment (): void {
        if (this.commentForm.valid) {
            const newComment = new Comment(
                this.commentForm.value.messageTitle,
                this.commentForm.value.messageBody,
            );
            //this.discussionsService.addNewDiscussion(discussion);
        }
    }


    ngOnInit () {

        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.required]
        });

    }

}
