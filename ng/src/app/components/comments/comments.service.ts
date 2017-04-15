import { Injectable } from "@angular/core";
import { Comment } from "./models/comment.model";
import { HttpService } from "../services/http.service";

@Injectable()

export class CommentsService {

    private comments: Comment[] = [];

    constructor(
        private httpService: HttpService
    ) {}


    addNewComment(newComment: Comment, discussionId: string) {
        const token = '?token=' + localStorage.getItem('jwt') + '&discussionId=' + discussionId;
        const url = 'http://localhost:3000/discussions/newcomment';
        this.httpService.post([url, token], newComment)
            .subscribe(res => {
                console.log(res);
            });
    }


    transformComment(){

    }


}
