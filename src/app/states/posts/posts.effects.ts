import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { PostsService } from "src/app/services/posts/posts.service";
import { AppState } from "../app.state";
import * as PostActions from "./posts.actions";
import { userIdSelector } from "./posts.selectors";

@Injectable()
export class PostEffects {

    userId!: number;

    constructor(
        private actions$: Actions,
        private postService: PostsService,
        private store: Store<AppState>
    ) {
        this.store.select(userIdSelector).subscribe(
            userId => this.userId = userId
        );
    }

    loadPosts$ = createEffect(
        () => this.actions$.pipe(
            ofType(PostActions.requestPosts),
            mergeMap(
                () => this.postService.getPosts(this.userId).pipe(
                    map(
                        posts => ({
                            type: PostActions.getPosts.type,
                            posts: posts
                        }
                        )
                    ), catchError(() => EMPTY)
                )
            )
        )
    )
}