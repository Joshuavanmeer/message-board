import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { AccountComponent } from './account/account.component';
import { DashboardGuardService } from "./dashboard-guard.service";


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        AccountComponent
    ],
    providers: [
        DashboardGuardService
    ]
})

export class DashboardModule {}
