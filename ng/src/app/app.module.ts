import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// modules
import { HomeModule } from "./components/home/home.module";
import { SharedModule } from "./components/shared/shared.module";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { DiscussionsModule } from "./components/discussions/discussions.module";
import { DiscussionCreatorModule } from "./components/discussions/discussion-creator/discussion-creator.module";
import { DiscussionPageModule } from "./components/discussions/discussion-page/discussion-page.module";
import { AppRoutingModule } from "./app.routing.module";
// components
import { AppComponent } from './app.component';
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { LogoutComponent } from "./components/main-header/logout/logout.component";
import { NotificationComponent } from "./components/notifications/notification.component";
import { FlashMessageComponent } from "./components/notifications/flash-message/flash-message.component";
import { ProfileCardComponent } from './components/main-header/profile-card/profile-card.component';
// global services
import { HttpService } from "./components/services/http.service";
import { AuthenticationService } from "./components/authentication/authentication.service";
import { DiscussionsService } from "./components/discussions/discussions.service";
import { NotificationService } from "./components/notifications/notification.service";
import { AuthenticationGuardService } from "./components/authentication/authentication.guard.service";
import { DiscussionCreatorGuardService } from "./components/discussions/discussion-creator/discussion-creator-guard.service";
import { CommentsService } from "./components/comments/comments.service";

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        NotificationComponent,
        FlashMessageComponent,
        LogoutComponent,
        ProfileCardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AuthenticationModule,
        HttpModule,
        HomeModule,
        DashboardModule,
        DiscussionsModule,
        DiscussionCreatorModule,
        DiscussionPageModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        AuthenticationService,
        AuthenticationGuardService,
        NotificationService,
        DiscussionsService,
        CommentsService,
        DiscussionCreatorGuardService,
        HttpService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
