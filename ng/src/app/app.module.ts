import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// modules
import { HomeModule } from "./components/home/home.module";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
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
        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        NotificationService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
