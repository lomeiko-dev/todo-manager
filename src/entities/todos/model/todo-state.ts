import {ITodo} from "shared/api/todos";

export interface ITodoState {
    textboxTitle: string,
    textboxDescription: string,
    todos: ITodo[],
    status: string,
    error: string,
}