import { Comment } from "../../comments/models/comment.model";

export class Discussion {

    constructor(
        public title: string,
        public body: string,
        public username?: string,
        public userId?: string,
        public discussionId?: string,
        public timeStamp?: string,
        public isoTime?: string
    ) {}

    addComment(newComment: Comment) {
        //this.comments.push(newComment);
    }

}

