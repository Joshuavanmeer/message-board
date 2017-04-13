import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginatorComponent } from "../paginator/paginator.component";
import { DiscussionComponent } from "../discussions/discussion/discussion.component";

@NgModule({
    imports : [ CommonModule ],
    declarations: [
        PaginatorComponent,
        DiscussionComponent
    ],
    exports: [
        PaginatorComponent,
        DiscussionComponent
    ]
})

export class SharedModule {}
