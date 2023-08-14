import {JSX} from "react";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "app/store";

export const WithStore = (Component: () => JSX.Element) => () => {
    return (
        <ReduxProvider store={store}>
            <Component/>
        </ReduxProvider>
    );
};