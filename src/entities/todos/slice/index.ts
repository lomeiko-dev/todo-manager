import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ITodoState} from "entities/todos/model/todo-state.ts";
import {getPageTodosThunk} from "shared/api/todos/queries/read.ts";
import {ITodo} from "shared/api/todos";

const initialState: ITodoState = {
    textboxTitle: "",
    textboxDescription: "",
    todos: [],
    status: "",
    error: ""
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPageTodosThunk.pending, (state) => {
            state.status = "pending";
        }).addCase(getPageTodosThunk.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload;
        }).addCase(getPageTodosThunk.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
});

export const todosReducer = todosSlice.reducer;
