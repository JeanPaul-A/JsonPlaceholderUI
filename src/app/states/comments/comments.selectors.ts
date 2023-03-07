import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CommentState } from "./comments.state";

export const selectCommentFeature = (state: AppState) => state.commentState;

export const loadingCommentSelector = createSelector(
    selectCommentFeature,
    (state: CommentState) => state.commentLoading
);

export const commentArraySelector = createSelector(
    selectCommentFeature,
    (state: CommentState) => state.commentArray
);

export const postIdSelector = createSelector(
    selectCommentFeature,
    (state: CommentState) => state.postId
);