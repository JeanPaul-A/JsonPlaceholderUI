import { Album } from "src/app/interfaces/album.interface";

export interface AlbumsState{
    loadingAlbums: boolean,
    albumsArray: ReadonlyArray<Album>,
    userId: number
}