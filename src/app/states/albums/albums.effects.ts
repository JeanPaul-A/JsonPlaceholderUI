import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, Observable } from "rxjs";
import { AlbumsService } from "src/app/services/albums/albums.service";
import { AppState } from "../app.state";
import * as AlbumActions from "./albums.actions";
import { albumsUserIdSelector } from "./albums.selectors";

@Injectable()
export class AlbumsEffects {

    userId!: number;

    constructor(
        private actions$: Actions,
        private albumService: AlbumsService,
        private store: Store<AppState>
    ) {
        this.store.select(albumsUserIdSelector).subscribe(
            (userId) => this.userId = userId
        );
    }

    loadAlbums$ = createEffect(
        () => this.actions$.pipe(
            ofType(AlbumActions.requestAlbums),
            mergeMap(
                () => this.albumService.getAlbums(this.userId).pipe(
                    map(
                        albums => ({
                            type: AlbumActions.getAlbums.type,
                            albums: albums
                        })
                    ), catchError(() => EMPTY)
                )
            )
        )
    )
}