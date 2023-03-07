import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { UsersService } from "src/app/services/users/users.service";
import { requestUsers, getUsers } from "./users.actions";

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) { }



    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(requestUsers.type),
            mergeMap(
                () => this.userService.getUsers().pipe(
                    map(
                        users => ({
                            type: getUsers.type,
                            users: users
                        }
                        )), catchError(() => EMPTY)
                ))
        ))
}