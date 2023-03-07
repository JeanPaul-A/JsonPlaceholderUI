import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { PhotosService } from "src/app/services/photos/photos.service";
import { AppState } from "../app.state";
import * as PhotoActions from ".//photos.actions";
import { albumIdSelector } from "./photos.selectors";

@Injectable()
export class PhotoEffects {

    albumId!: number;

    constructor(
        private actions$: Actions,
        private photoService: PhotosService,
        private store: Store<AppState>
    ) {
        this.store.select(albumIdSelector).subscribe(
            (albumId) => this.albumId = albumId
        )
    }

    loadPhotos$ = createEffect(
        () => this.actions$.pipe(
            ofType(PhotoActions.requestPhotos),
            mergeMap(
                () => this.photoService.getPhotos(this.albumId).pipe(
                    map(
                        photos => ({
                            type: PhotoActions.getPhotos.type,
                            photos: photos
                        })
                    ), catchError(() => EMPTY)
                )
            )
        )
    )

}