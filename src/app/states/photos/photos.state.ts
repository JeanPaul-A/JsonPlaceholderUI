import { Photo } from "src/app/interfaces/photo.interface";

export interface PhotoState{
    loadingPhotos: boolean,
    photosArray: ReadonlyArray<Photo>,
    albumId: number      
}