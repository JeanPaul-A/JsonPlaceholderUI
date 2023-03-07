import { createReducer, on } from "@ngrx/store";
import { UserState } from "./users.state";
import * as UsersActions from "./users.actions";

export const initialState: UserState = {
    loadingUsers: false,
    usersArray: [],
    userId: -1
}

export const UserReducers = createReducer(
    initialState,
    on(
        UsersActions.requestUsers,
        (state) => {
            return { ...state, loadingUsers: true }
        }
    ),
    on(
        UsersActions.getUsers,
        (state, { users }) => {
            return { ...state, loadingUsers: false, usersArray: users }
        }
    ),
    on(
        UsersActions.sendUserId,
        (state, { userId }) => {
            return { ...state, userId: userId - 1 }
        }
    )
)