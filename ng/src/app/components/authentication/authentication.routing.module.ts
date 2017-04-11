import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationGuardService } from "./authentication.guard.service";

const authenticationRoutes: Routes = [{
    path: 'auth',
    component: AuthenticationComponent,
    canActivate: [ AuthenticationGuardService ],
    children: [
        {
            path: '',
            children: [
                {path: 'login', component: LoginComponent},
                {path: 'register', component: RegisterComponent}
            ],
        }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(authenticationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule { }
