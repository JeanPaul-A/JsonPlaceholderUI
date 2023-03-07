import { createAction, props } from "@ngrx/store";
import { Photo } from "src/app/interfaces/photo.interface";

export const requestPhotos = createAction(
    "[Photo Service] Request photos to dabatase",
    props<{ albumId: number }>()
);

export const getPhotos = createAction(
    "[Photo Module] Get photos from database",
    props<{ photos: ReadonlyArray<Photo> }>()
);