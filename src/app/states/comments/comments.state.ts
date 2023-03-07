import { Comment } from "src/app/interfaces/comments.interface";

export interface CommentState{
    commentLoading: boolean,
    commentArray: ReadonlyArray<Comment>,
    postId: number
}