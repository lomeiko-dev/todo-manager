import {ICreateTodo} from "../model/model-queries.ts";
import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";

export const addTodo: ICreateTodo = (data) => {
    return apiInstance.post(TODOS, data);
}