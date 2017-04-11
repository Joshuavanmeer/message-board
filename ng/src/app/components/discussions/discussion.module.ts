import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DiscussionComponent } from "./discussion/discussion.component";
import { DiscussionListComponent } from "./discussion-list/discussion-list.component";


@NgModule({
    declarations: [
        DiscussionComponent,
        DiscussionListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: []
})

export class DiscussionModule {}
