import {Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [
        trigger('errorMsg', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]

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
