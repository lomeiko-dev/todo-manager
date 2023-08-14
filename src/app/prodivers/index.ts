import {JSX} from "react";
import {WithStore} from "app/prodivers/hoc/with-store.tsx";
import {WithRouter} from "app/prodivers/hoc/with-router.tsx";

export const wrap = (Component: () => JSX.Element) => WithStore(WithRouter(Component));