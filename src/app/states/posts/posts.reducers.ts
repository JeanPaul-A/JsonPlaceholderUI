import { createReducer, on } from "@ngrx/store";
import { PostState } from "./posts.state";
import * as PostActions from "./posts.actions";

export const initialState: PostState = {
    loadingPosts: false,
    postsArray: [],
    userId: -1,
    commentsArray: []
}

export const PostReducers = createReducer(
    initialState,
    on( 
        PostActions.requestPosts,
        (state, { userId }) => {
            return { ...state, loadingPosts: true, userId: userId }
        }
    ),
    on(
        PostActions.getPosts,
        (state, { posts }) => {
            return { ...state, loadingPosts: false, postsArray: posts }
        }
    )
)