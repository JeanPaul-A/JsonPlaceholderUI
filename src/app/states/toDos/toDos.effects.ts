import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { ToDosService } from "src/app/services/toDos/to-dos.service";
import { AppState } from "../app.state";
import { getToDos, requestToDos } from "./toDos.actions";
import { userIdSelector } from "./ToDos.selectors";

@Injectable()
export class ToDoEffects {

    userId!: number;

    constructor(
        private actions$: Actions,
        private toDoService: ToDosService,
        private store: Store<AppState>
    ) {
        this.store.select(userIdSelector).subscribe(
            (userId) => this.userId = userId
        )
    }

    loadToDos$ = createEffect(
        () => this.actions$.pipe(
            ofType(requestToDos),
            mergeMap(
                () => this.toDoService.getToDos(this.userId).pipe(
                    map(
                        toDos => ({
                            type: getToDos.type,
                            toDosArray: toDos
                        }
                        )), catchError(() => EMPTY)
                )
            )
        )
    )

}