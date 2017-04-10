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


    registerNewUser (): void {
        if (this.registerForm.valid) {
            const newUser = {
                name: this.registerForm.value.name,
                username: this.registerForm.value.username,
                email: this.registerForm.value.email,
                password: this.registerForm.value.password
            };
            this.authenticationService.register(newUser)
        }
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
