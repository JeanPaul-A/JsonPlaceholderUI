import { ActionReducerMap } from "@ngrx/store";
import { AlbumReducers } from "./albums/albums.reducers";
import { AlbumsState } from "./albums/albums.state";
import { commentReducers as CommentReducers } from "./comments/comments.reducers";
import { CommentState } from "./comments/comments.state";
import { PhotoReducers } from "./photos/photos.reducers";
import { PhotoState } from "./photos/photos.state";
import { PostReducers } from "./posts/posts.reducers";
import { PostState } from "./posts/posts.state";
import { ToDoReducers } from "./toDos/toDos.reducers";
import { ToDosState } from "./toDos/toDos.state";
import { UserReducers } from "./users/users.reducers";
import { UserState } from "./users/users.state";

export interface AppState {
    userState: UserState,
    albumState: AlbumsState,
    photoState: PhotoState,
    postState: PostState,
    commentState: CommentState,
    toDosState: ToDosState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    userState: UserReducers,
    albumState: AlbumReducers,
    photoState: PhotoReducers,
    postState: PostReducers,
    commentState: CommentReducers,
    toDosState: ToDoReducers
}