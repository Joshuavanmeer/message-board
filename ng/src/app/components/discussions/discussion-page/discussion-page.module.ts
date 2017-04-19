import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiscussionPageComponent } from "./discussion-page.component";
import { SharedModule } from "../../shared/shared.module";
import { DiscussionHeroComponent } from "../discussion-hero/discussion-hero.component";
import { CommentCreatorComponent } from "../../comments/comment-creator/comment-creator.component";
import { CommentListComponent } from "../../comments/comment-list/comment-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommentComponent } from "../../comments/comment/comment.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations: [
        DiscussionPageComponent,
        DiscussionHeroComponent,
        CommentCreatorComponent,
        CommentListComponent,
        CommentComponent
    ],
    providers: []
})

export class DiscussionPageModule {}
