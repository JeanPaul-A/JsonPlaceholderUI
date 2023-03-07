import { createAction, props } from "@ngrx/store";
import { Comment } from "src/app/interfaces/comments.interface";

export const requestComments = createAction(
    "[Comment Service] Request comments to database",
    props<{ postId: number }>()
);

export const getComments = createAction(
    "[Comment Module] Get comments from database",
    props<{ comments: ReadonlyArray<Comment> }>()
);