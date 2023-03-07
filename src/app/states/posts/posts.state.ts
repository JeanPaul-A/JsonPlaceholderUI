import { Post } from "src/app/interfaces/posts.interface";
import { Comment } from "src/app/interfaces/comments.interface";

export interface PostState {
    loadingPosts: boolean,
    postsArray: ReadonlyArray<Post>,
    userId: number,
    commentsArray: ReadonlyArray<Comment>
}