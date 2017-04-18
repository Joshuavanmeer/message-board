import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    login (): void {
        if (this.loginForm.valid) {
            const userCredentials = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            this.authenticationService.login(userCredentials);
        }
    }


    constructor (
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {}


    ngOnInit () {

        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

    }




}
