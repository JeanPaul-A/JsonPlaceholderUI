import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/interfaces/posts.interface";

export const requestPosts = createAction(
    "[Post Service] Request posts to database",
    props<{ userId: number }>()
);

export const getPosts = createAction(
    "[Post Module] Get posts from database",
    props<{ posts: ReadonlyArray<Post> }>()
);