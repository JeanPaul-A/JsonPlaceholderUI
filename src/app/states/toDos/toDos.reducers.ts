import { createReducer, on } from "@ngrx/store";
import { ToDosState } from "./toDos.state";
import * as ToDosActions from "./toDos.actions";

export const initialState: ToDosState = {
    toDosLoading: false,
    toDosArray: [],
    userId: -1
}

export const ToDoReducers = createReducer(
    initialState,
    on(
        ToDosActions.requestToDos,
        (state, { userId }) => {
            return { ...state, loadingPosts: true, userId: userId }
        }
    ),
    on(
        ToDosActions.getToDos,
        (state, { toDosArray }) => {
            return { ...state, toDosLoading: false, toDosArray: toDosArray }
        }
    )
)