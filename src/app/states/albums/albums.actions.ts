import { createAction, props } from "@ngrx/store"; import { Album } from "../../interfaces/album.interface"

export const requestAlbums = createAction(
    "[Album Service] Request albums to database",
    props<{ userId: number }>()
);

export const getAlbums = createAction(
    "[Album Module] Get albums from database",
    props<{ albums: ReadonlyArray<Album> }>()
);