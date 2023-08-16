import {ITodo} from "shared/api/todos/model/todo";

export interface IModelGetPageTodos {
    start: number,
    end: number,
}

export interface IModelUpdateTodo extends Pick<ITodo, "id">{
    newData: ITodo
}

export interface IModelDeleteTodo extends Pick<ITodo, "id">{}