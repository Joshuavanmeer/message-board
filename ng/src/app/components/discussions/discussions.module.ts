import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DiscussionListComponent } from "./discussion-list/discussion-list.component";
import { SharedModule } from "../shared/shared.module";
import { DiscussionsComponent } from "./discussions.component";
import {DiscussionComponent} from "./discussion/discussion.component";


@NgModule({
    declarations: [
        DiscussionsComponent,
        DiscussionComponent,
        DiscussionListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: []
})

export class DiscussionsModule {}
