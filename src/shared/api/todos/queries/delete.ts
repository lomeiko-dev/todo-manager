import {apiInstance} from "../../base.ts";
import {IModelDeleteTodo} from "../model/queries";

export const queryDeleteTodo: IModelDeleteTodo = (id) => {
    return apiInstance.delete(todos + `/${id}`);
}