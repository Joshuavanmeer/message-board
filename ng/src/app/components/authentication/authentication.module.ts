import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationRoutingModule } from "./authentication.routing.module";

@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ],
    providers: [
    ]
})

export class AuthenticationModule { }
