import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { CommentsService } from "src/app/services/comments/comments.service";
import { AppState } from "../app.state";
import * as CommentActions from "./comments.actions";
import { postIdSelector } from "./comments.selectors";

@Injectable()
export class CommentEffects {

    postId!: number;

    constructor(
        private actions$: Actions,
        private commentService: CommentsService,
        private store: Store<AppState>
    ) {
        this.store.select(postIdSelector).subscribe(
            (postId) => this.postId = postId
        )
    }

    loadComments$ = createEffect(
        () => this.actions$.pipe(
            ofType(CommentActions.requestComments),
            mergeMap(
                () => this.commentService.getComments(this.postId).pipe(
                    map(
                        comments => ({
                            type: CommentActions.getComments.type,
                            comments: comments
                        })
                    ), catchError(() => EMPTY)
                )
            )
        )
    )
}