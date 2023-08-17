import {RouteProps} from "react-router-dom";
import {TodosPage} from "pages/todos";
import {TodoPage} from "pages/todo";

export const publicRoutes: RouteProps[] = [
    {
        path: routePaths.TODOS,
        element: <TodosPage/>
    },
    {
        path: routePaths.TODO,
        element: <TodoPage/>
    }
]