import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PostState } from "./posts.state";

export const selectPostsFeature = (state: AppState) => state.postState;

export const loadingPostsSelector = createSelector(
    selectPostsFeature,
    (state: PostState) => state.loadingPosts
);

export const postsArraySelector = createSelector(
    selectPostsFeature,
    (state: PostState) => state.postsArray
);

export const userIdSelector = createSelector(
    selectPostsFeature,
    (state: PostState) => state.userId
);