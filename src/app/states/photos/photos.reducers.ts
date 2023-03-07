import { createReducer, on } from "@ngrx/store";
import { PhotoState } from "./photos.state";
import * as PhotoActions from "./photos.actions";

export const initialState: PhotoState = {
    loadingPhotos: false,
    photosArray: [],
    albumId: -1
}

export const PhotoReducers = createReducer(
    initialState,
    on(
        PhotoActions.requestPhotos,
        (state, { albumId }) => {
            return { ...state, loadingPhotos: true, albumId: albumId }
        }
    ),
    on(
        PhotoActions.getPhotos,
        (state, { photos }) => {
            return { ...state, loadingPhotos: false, photosArray: photos }
        }
    )
)