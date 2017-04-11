import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Discussion } from "../models/discussion.model";
import { AuthenticationService } from "../../authentication/authentication.service";
import { DiscussionsService } from "../discussions.service";

@Component({
  selector: 'app-discussion-creator',
  templateUrl: './discussion-creator.component.html',
  styleUrls: ['./discussion-creator.component.css']
})
export class DiscussionCreatorComponent implements OnInit {


    private discussionForm: FormGroup;


    constructor (
        private formBuilder: FormBuilder,
        private discussionsService: DiscussionsService,
        private authenticationService: AuthenticationService
    ) {}


    addNewDiscussion (): void {
        if (this.discussionForm.valid) {
            const discussion = new Discussion(
                this.discussionForm.value.messageTitle,
                this.discussionForm.value.messageBody,
                0,
                this.authenticationService.user.username
            );
            this.discussionsService.addNewDiscussion(discussion);
        }
    }


    ngOnInit () {

        this.discussionForm = this.formBuilder.group({
            messageTitle: ['', Validators.required],
            messageBody: ['', Validators.required]
        });

    }

}
