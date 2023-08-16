import {apiInstance} from "../../base.ts";
import {TODOS} from "../../config/url-config";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITodo} from "shared/api/todos";

export const addTodoThunk = createAsyncThunk('todo/create',
async (data: ITodo, {fulfillWithValue, rejectWithValue}) => {
    try {
        const response = await apiInstance.post<ITodo>(TODOS, data);

        if(response.status !== 200)
            throw new Error("server error");

        return  fulfillWithValue(response.data);
    }catch (error){
        return rejectWithValue((error as Error).message);
    }
});