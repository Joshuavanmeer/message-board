import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DiscussionComponent } from "../discussion/discussion.component";


@NgModule({
    declarations: [
        DiscussionComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: []
})

export class DiscussionListModule {}
