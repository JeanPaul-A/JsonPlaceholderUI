import { ToDo } from "src/app/interfaces/toDo.interface";

export interface ToDosState {
    toDosLoading: boolean,
    toDosArray: ReadonlyArray<ToDo>,
    userId: number
}