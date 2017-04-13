import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiscussionPageComponent } from "./discussion-page.component";
import { SharedModule } from "../../shared/shared.module";
import { DiscussionHeroComponent } from "../discussion-hero/discussion-hero.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        DiscussionPageComponent,
        DiscussionHeroComponent
    ],
    providers: []
})

export class DiscussionPageModule {}
