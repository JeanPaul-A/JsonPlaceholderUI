import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";

export const requestUsers = createAction(
    "[User Service] Request all users to database"
);

export const getUsers = createAction(
    "[User Module] Get all users from database",
    props<{ users: ReadonlyArray<User> }>()
);

export const sendUserId = createAction(
    "[User Module] Send the id of the user to detail",
    props<{ userId: number }>()
);