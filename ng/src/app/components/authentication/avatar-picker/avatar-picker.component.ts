import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Avatar} from "../models/avatar.model";


@Component({
  selector: 'app-avatar-picker',
  templateUrl: 'avatar-picker.component.html',
  styleUrls: ['avatar-picker.component.css']
})
export class AvatarPickerComponent implements OnInit {

    @Output() newAvatarSelectedEv: EventEmitter<any> = new EventEmitter();

    private storageUrl: string = 'http://www.joshuavanmeer.nl/messageboard/img/';
    private selectedAvatarId: number = 1;
    private avatars: any[] = [
        new Avatar( 1, this.storageUrl + 'avatar1.svg', true ),
        new Avatar( 2, this.storageUrl + 'avatar2.svg', false ),
        new Avatar( 3, this.storageUrl + 'avatar3.svg', false ),
        new Avatar( 4, this.storageUrl + 'avatar4.svg', false ),
    ];


    constructor() { }


    newAvatarSelected(id: number) {
        this.avatars[id - 1].toggleSelected();
        this.avatars[this.selectedAvatarId - 1].toggleSelected();
        this.newAvatarSelectedEv.emit(this.avatars[id - 1].src);
        this.selectedAvatarId = id;
    }


    ngOnInit() {
    }

}
