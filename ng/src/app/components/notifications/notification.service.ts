import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { FlashMessage } from "./models/flashmessage.model";

@Injectable()
export class NotificationService {

    flashMessageSource: Subject<any> = new Subject();

    flashMessageDispenser$ = this.flashMessageSource.asObservable();

    // creates a flash message according to a certain config
    showFlashMessage(config: FlashMessage) {
        this.flashMessageSource.next(config);
    }

    constructor() { }

}
