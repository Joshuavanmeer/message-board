import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private registerForm: FormGroup;
    private avatarSrc: string = 'http://www.joshuavanmeer.nl/messageboard/img/avatar1.svg';


    registerNewUser (): void {
        if (this.registerForm.valid) {
            const newUser = {
                name: this.registerForm.value.name,
                username: this.registerForm.value.username,
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                imgSrc: this.avatarSrc
            };
            this.authenticationService.register(newUser);
        }
    }


    updateAvatarSrc(avatarSrc: string) {
        this.avatarSrc = avatarSrc;
    }


    constructor (
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {}


    ngOnInit () {

        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

}
