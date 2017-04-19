import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
import { style, state, trigger, animate, transition } from "@angular/animations";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    animations: [
        trigger('errorMsg', [
            state('show', style({
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate(400)
            ]),
            transition('* => void', [
                animate(400, style({
                    opacity: 0
                }))
            ])
        ])
    ]
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
            name: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            username: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            email: ['', [
                Validators.required,
                Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                ]
            ],
            password: ['', [
                Validators.required,
                Validators.pattern('[a-zA-Z0-9]*')
                ]
            ]
        });

    }

}
