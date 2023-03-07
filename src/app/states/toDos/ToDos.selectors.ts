import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ToDosState } from "./toDos.state";

export const selectToDosFeature = (state: AppState) => state.toDosState;

export const toDoLoadingSelector = createSelector(
    selectToDosFeature,
    (state: ToDosState) => state.toDosLoading
)

export const toDosArraySelector = createSelector(
    selectToDosFeature,
    (state: ToDosState) => state.toDosArray
)

export const userIdSelector = createSelector(
    selectToDosFeature,
    (state: ToDosState) => state.userId
)