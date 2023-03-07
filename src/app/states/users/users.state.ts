import { User } from "src/app/interfaces/user.interface";

export interface UserState{
    loadingUsers: boolean,
    usersArray: ReadonlyArray<User>,
    userId: number
}