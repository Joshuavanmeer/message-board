
export class Discussion {

    constructor(
        public title: string,
        public body: string,
        public comments: number,
        public username?: string,
        public userId?: string,
        public discussionId?: string,
        public timeStamp?: string,
        public isoTime?: string,
    ) {}

}

