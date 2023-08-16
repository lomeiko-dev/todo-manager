import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITodo} from "shared/api/todos";
import {IModelGetPageTodos} from "shared/api/todos/model/queries";

const errorHandler = (error: unknown) => {
    if(error instanceof Error)
        return error.message;
    return String(error);
}

export const getPageTodosThunk = createAsyncThunk('todo/read',
    async ({start, end}: IModelGetPageTodos, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiInstance.get<ITodo[]>(TODOS + `?_start=${start}&_end=${end}`);

            return  fulfillWithValue(response.data);
        }catch (error){
            return rejectWithValue(errorHandler(error));
        }
    });