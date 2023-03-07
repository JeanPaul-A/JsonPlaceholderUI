import { createSelector, select } from "@ngrx/store";
import { AppState } from "../app.state";
import { AlbumsState } from "./albums.state";

export const selectAlbumsFeature = (state: AppState) => state.albumState;

export const loadingAlbumsSelector = createSelector(
    selectAlbumsFeature,
    (state: AlbumsState) => state.loadingAlbums
);

export const albumsArraySelector = createSelector(
    selectAlbumsFeature,
    (state: AlbumsState) => state.albumsArray
);

export const albumsUserIdSelector = createSelector(
    selectAlbumsFeature,
    (state: AlbumsState) => state.userId
)

