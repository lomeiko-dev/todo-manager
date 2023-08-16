import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "entities/todos/slice";

export const store = configureStore({
    reducer:{
        todosReducer: todosReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;