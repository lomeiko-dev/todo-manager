import {IReadTodo} from "../model/model-queries.ts";
import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";

export const getPageTodos: IReadTodo = (start=0, end=10) => {
    return apiInstance.get(TODOS + `?_start=${start}&_end=${end}`);
}