import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DiscussionCreatorComponent } from "./discussion-creator.component";


@NgModule({
    declarations: [
        DiscussionCreatorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: []
})

export class DiscussionCreatorModule {}
