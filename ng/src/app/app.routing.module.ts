import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DiscussionCreatorComponent } from "./components/discussions/discussion-creator/discussion-creator.component";
import { DiscussionCreatorGuardService } from "./components/discussions/discussion-creator/discussion-creator-guard.service";
import { DiscussionListComponent } from "./components/discussions/discussion-list/discussion-list.component";

const appRoutes: Routes = [
    { path: '', component: DiscussionListComponent },
    { path: 'start-new-discussion', component: DiscussionCreatorComponent, canActivate: [ DiscussionCreatorGuardService ] },
    { path: 'auth', component: AuthenticationComponent, loadChildren: 'app/components/authentication/authentication.module#AuthenticationModule' },
    { path: 'dashboard', component: DashboardComponent, loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
