import { createReducer, on } from "@ngrx/store";
import { AlbumsState } from "./albums.state";
import * as AlbumActions from "./albums.actions";


export const initialState: AlbumsState = {
    loadingAlbums: false,
    albumsArray: [],
    userId: -1
};

export const AlbumReducers = createReducer(
    initialState,
    on(
        AlbumActions.requestAlbums,
        (state, { userId }) => {
            return { ...state, loadingAlbums: true, userId: userId }
        }
    ),
    on(
        AlbumActions.getAlbums,
        (state, { albums }) => {
            return { ...state, loadingAlbums: false, albumsArray: albums }
        }
    )
)
