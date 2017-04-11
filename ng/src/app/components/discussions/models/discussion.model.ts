
export class Discussion {

    constructor(
        public title: string,
        public body: string,
        public userId: string,
        public comments: number,
        public discussionId?: string
    ) {}

}

