import {apiInstance} from "shared/api/base.ts";
import {IModelGetTodo} from "../model/queries";

export const queryGetPageTodos: IModelGetTodo = (id) => {
    return apiInstance.get(todos + `/${id}`);
}