import {Component, OnInit, OnDestroy} from '@angular/core';
import { NotificationService } from "./notification.service";

@Component({
    selector: 'app-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

    private showFlashMessage: boolean = false;
    flashMessageConfig: any;

    private flashMessageSub;

    constructor(
        private notificationService: NotificationService
    ) { }




    ngOnInit() {

        this.flashMessageSub = this.notificationService.flashMessageDispenser$
            .subscribe(res => {
                this.showFlashMessage = true;
                setTimeout(() => {
                    this.showFlashMessage = false;
                }, res.duration)
                this.flashMessageConfig = {
                    message: res.message,
                    type: res.type
                }
            });

    }

    ngOnDestroy() {
        this.flashMessageSub.unsubscribe();
    }

}
