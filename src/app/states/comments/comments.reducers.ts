import { createReducer, on } from "@ngrx/store";
import { CommentState } from "./comments.state";
import * as CommentActions from "./comments.actions";

export const initialState: CommentState = {
    commentLoading: false,
    commentArray: [],
    postId: -1
};

export const commentReducers = createReducer(
    initialState,
    on(
        CommentActions.requestComments,
        (state, { postId }) => {
            return { ...state, commentLoading: true, postId: postId }
        }
    ),
    on(
        CommentActions.getComments,
        (state, { comments }) => {
            return { ...state, commentLoading: false, commentArray: comments }
        }
    )
)

