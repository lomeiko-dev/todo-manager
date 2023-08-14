import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {publicRoutes} from "app/routing/lib/routes.tsx";

export const AppRouting = () => {
    return(
        <Suspense fallback="Loading...">
            <Routes>
                {Object.values(publicRoutes).map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)}
            </Routes>
        </Suspense>
    )
};