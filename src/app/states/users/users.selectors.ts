import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "./users.state";

export const selectUsersFeature = (state: AppState) => state.userState;

export const loadingUsersSelector = createSelector(
    selectUsersFeature,
    (state: UserState) => state.loadingUsers
);

export const usersArraySelector = createSelector(
    selectUsersFeature,
    (state: UserState) => state.usersArray

);

export const userIdSelector = createSelector(
    selectUsersFeature,
    (state: UserState) => state.userId
);

