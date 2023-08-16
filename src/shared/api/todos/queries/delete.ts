import {IDeleteTodo} from "../model/model-queries.ts";
import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";

export const deleteTodo: IDeleteTodo = (id) => {
    return apiInstance.delete(TODOS + `/${id}`);
}