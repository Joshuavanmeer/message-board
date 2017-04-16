export class Avatar{

    constructor(
        public id: number,
        public src: string,
        public selected: boolean,
    ) {}


    toggleSelected() {
        this.selected = this.selected ? false : true;
    }

}
