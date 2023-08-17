import {apiInstance} from "../../base.ts";
import {IModelCreateTodo} from "../model/queries";

export const queryAddTodo: IModelCreateTodo = (data) => {
    return apiInstance.post(todos, data);
}