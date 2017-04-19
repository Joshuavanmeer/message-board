import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Discussion } from "../models/discussion.model";
import { DiscussionsService } from "../discussions.service";
import { style, animate, transition, state, trigger } from "@angular/animations";

@Component({
    selector: 'app-discussion-creator',
    templateUrl: './discussion-creator.component.html',
    styleUrls: ['./discussion-creator.component.css'],
    animations: [
        trigger('errorMsg', [
            state('show', style({
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate(400)
            ]),
            transition('* => void', [
                animate(400, style({
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class DiscussionCreatorComponent implements OnInit {


    private discussionForm: FormGroup;


    constructor (
        private formBuilder: FormBuilder,
        private discussionsService: DiscussionsService
    ) {}


    addNewDiscussion (): void {
        if (this.discussionForm.valid) {
            const discussion = new Discussion(
                this.discussionForm.value.discussionTitle,
                this.discussionForm.value.discussionBody
            );
            this.discussionsService.addNewDiscussion(discussion);
        }
    }


    ngOnInit () {

        this.discussionForm = this.formBuilder.group({
            discussionTitle: ['', Validators.required],
            discussionBody: ['', Validators.required]
        });

    }

}
