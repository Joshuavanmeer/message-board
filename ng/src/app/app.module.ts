import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// modules
import { HomeModule } from "./components/home/home.module";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { DiscussionModule } from "./components/discussions/discussion.module";
import { DiscussionCreatorModule } from "./components/discussions/discussion-creator/discussion-creator.module";
import { AppRoutingModule } from "./app.routing.module";
// components
import { AppComponent } from './app.component';
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { LogoutComponent } from "./components/main-header/logout/logout.component";
import { NotificationComponent } from "./components/notifications/notification.component";
import { FlashMessageComponent } from "./components/notifications/flash-message/flash-message.component";
// global services
import { AuthenticationService } from "./components/authentication/authentication.service";
import { HttpService } from "./components/services/http.service";
import { NotificationService } from "./components/notifications/notification.service";
import { DiscussionService } from "./components/discussions/discussion.service";
import { AuthenticationGuardService } from "./components/authentication/authentication.guard.service";
import { DiscussionCreatorGuardService } from "./components/discussions/discussion-creator/discussion-creator-guard.service";

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        NotificationComponent,
        FlashMessageComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AuthenticationModule,
        HttpModule,
        HomeModule,
        DashboardModule,
        DiscussionModule,
        DiscussionCreatorModule,
        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        AuthenticationGuardService,
        NotificationService,
        DiscussionService,
        DiscussionCreatorGuardService,
        HttpService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
