import {JSX} from "react";
import {BrowserRouter} from "react-router-dom";


const WithRouter = (Component: () => JSX.Element) => () => {
    return (
        <BrowserRouter>
            <Component/>
        </BrowserRouter>
    );
};

export {WithRouter};