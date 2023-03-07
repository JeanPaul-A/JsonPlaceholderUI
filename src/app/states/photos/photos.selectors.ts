import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PhotoState } from "./photos.state";

export const selectPhotoFeature = (state: AppState) => state.photoState;

export const loadingPhotosSelector = createSelector(
    selectPhotoFeature,
    (state: PhotoState) => state.loadingPhotos
);

export const photosArraySelector = createSelector(
    selectPhotoFeature,
    (state: PhotoState) => state.photosArray
);

export const albumIdSelector = createSelector(
    selectPhotoFeature,
    (state: PhotoState) => state.albumId
)