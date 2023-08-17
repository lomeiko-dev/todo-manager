import {apiInstance} from "../../base.ts";
import {IModelGetPageTodos} from "../model/queries";

export const queryGetPageTodos: IModelGetPageTodos = (start, end) => {
    return apiInstance.get(todos + `&_start=${start}&_end=${end}`);
}