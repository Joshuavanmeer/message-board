export class Comment {

    constructor(
        public body: string,
        public username?: string,
        public commentId?: string,
        public timeStamp?: string,
        public userImgSrc?: string
    ) {}

}
