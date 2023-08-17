import {ITodo} from "../todo";
import {AxiosResponse} from "axios";

export interface IModelGetPageTodos {
    (start: number, end: number): Promise<AxiosResponse<ITodo[]>>
}
export interface IModelCreateTodo {
    (data: ITodo): Promise<AxiosResponse<ITodo>>
}
export interface IModelUpdateTodo {
    (newData: ITodo, id: Pick<ITodo, "id">): Promise<AxiosResponse<ITodo>>
}

export interface IModelDeleteTodo {
    (id: Pick<ITodo, "id">) : Promise<AxiosResponse<ITodo>>
}

export interface IModelGetTodo {
    (id: Pick<ITodo, "id">) : Promise<AxiosResponse<ITodo>>
}