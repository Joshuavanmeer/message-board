import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationRoutingModule } from "./authentication.routing.module";
import { AvatarPickerComponent } from "./avatar-picker/avatar-picker.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent,
        AvatarPickerComponent,
        AvatarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [
    ]
})

export class AuthenticationModule { }
