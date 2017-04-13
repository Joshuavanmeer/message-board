import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiscussionPageComponent } from "./discussion-page.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        DiscussionPageComponent
    ],
    providers: []
})

export class DiscussionPageModule {}
