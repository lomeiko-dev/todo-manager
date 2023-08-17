import {apiInstance} from "../../base.ts";
import {IModelUpdateTodo} from "shared/api/todos/model/queries";

export const queryUpdateTodo: IModelUpdateTodo = (newData, id) => {
    return apiInstance.put(todos + `/${id}`, newData);

}