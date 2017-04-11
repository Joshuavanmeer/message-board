import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from "./account/account.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardGuardService } from "./dashboard-guard.service";

const dashboardRoutes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardGuardService],
    children: [
        {
            path: '',
            children: [
                {path: 'account', component: AccountComponent }
            ],
        }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class DashboardRoutingModule {}

