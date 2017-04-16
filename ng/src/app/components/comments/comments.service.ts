import { Injectable } from "@angular/core";
import { Comment } from "./models/comment.model";
import { TimeStamp } from "../../models/timestamp.model";
import { HttpService } from "../services/http.service";
import { Subject } from "rxjs";

@Injectable()

export class CommentsService {

    commentList: Comment[];

    private commentListSource: Subject<any> = new Subject();
    commentList$ = this.commentListSource.asObservable();


    constructor(
        private httpService: HttpService
    ) {}


    addNewComment(newComment: Comment, discussionId: string) {
        const token = '?token=' + localStorage.getItem('jwt') + '&discussionId=' + discussionId;
        const url = 'http://localhost:3000/discussions/newcomment';
        this.httpService.post([url, token], newComment)
            .subscribe(res => {
                const transformedComment = this.transformComments([res.comment]);
                this.commentList.unshift(transformedComment[0]);
            });
    }


    getComments(discussionId: string) {
        const id = '?discussionId=' + discussionId;
        this.httpService.get(['http://localhost:3000/discussions/comments', id])
            .subscribe(res => {
                this.commentList = this.transformComments(res.comments);
                this.commentListSource.next(this.commentList);
            });
    }


    transformComments(rawComments: any[]): Comment[] {
        const transformedComments = [];
        rawComments.forEach(comment => {
            transformedComments.unshift(new Comment(
                comment.body,
                comment.user.username,
                comment._id,
                TimeStamp.convertTime(comment.dates.created),
                comment.user.imgSrc
            ));
        });
        return transformedComments;
    }



}
