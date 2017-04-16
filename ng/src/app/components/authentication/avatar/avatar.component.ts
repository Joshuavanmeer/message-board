import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.css']
})
export class AvatarComponent implements OnInit {

    @Input() private avatar: any;
    @Output() selectAvatarEv: EventEmitter<any> = new EventEmitter();


    selectAvatar() {
        if (!this.avatar.selected) {
            this.selectAvatarEv.emit(this.avatar.id);
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
