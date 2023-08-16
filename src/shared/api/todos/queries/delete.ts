import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITodo} from "shared/api/todos";
import {IModelDeleteTodo} from "shared/api/todos/model/queries";

export const deleteTodoThunk = createAsyncThunk('todo/delete',
    async (id: IModelDeleteTodo, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiInstance.delete<ITodo>(TODOS + `/${id}`);

            if(response.status !== 200)
                throw new Error("server error");

            return  fulfillWithValue(response.data);
        }catch (error){
            return rejectWithValue((error as Error).message);
        }
    });