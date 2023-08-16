import {AxiosPromise} from "axios";
import {ITodo} from "./todo.ts";

export interface IReadTodo {
    (start: number, end: number) : AxiosPromise<ITodo[]>;
}

export interface ICreateTodo {
    (data: ITodo) : AxiosPromise<ITodo>
}

export interface IUpdateTodo {
    (id: string, data: ITodo) : AxiosPromise<ITodo>
}

export interface IDeleteTodo {
    (id: string) : AxiosPromise<ITodo>
}