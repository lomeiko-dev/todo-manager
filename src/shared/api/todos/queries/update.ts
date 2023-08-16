import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITodo} from "shared/api/todos";
import {IModelUpdateTodo} from "shared/api/todos/model/queries";

export const updateTodoThunk = createAsyncThunk('todo/update',
    async ({id, newData}: IModelUpdateTodo, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiInstance.put<ITodo>(TODOS + `/${id}`, newData);

            if(response.status !== 200)
                throw new Error("server error");

            return  fulfillWithValue(response.data);
        }catch (error){
            return rejectWithValue((error as Error).message);
        }
    });