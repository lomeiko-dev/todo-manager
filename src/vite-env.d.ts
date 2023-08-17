/// <reference types="vite/client" />

declare global {
    declare type RootState = import('app/store').RootState;
    declare type AppDispatch = import('app/store').AppDispatch;

    // api urls
    declare const base_url = "http://localhost:3001/";
    declare  const todos = "todos";

    declare enum routePaths {
        TODOS = '/todos',
        TODO = '/todo'
    }
}

export {};
