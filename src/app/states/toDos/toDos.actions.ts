import { createAction, props } from "@ngrx/store";
import { ToDo } from "../../interfaces/toDo.interface";

export const requestToDos = createAction(
    "[ToDos Service] Request ToDos to database",
    props<{ userId: number }>()
)

export const getToDos = createAction(
    "[ToDos Component] Get ToDos from database",
    props<{ toDosArray: ReadonlyArray<ToDo> }>()
)