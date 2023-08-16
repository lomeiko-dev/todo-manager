import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";
import {IUpdateTodo} from "../model/model-queries.ts";

export const updateTodo: IUpdateTodo = (id, newData) => {
    return apiInstance.put(TODOS + `/${id}`, newData);
}