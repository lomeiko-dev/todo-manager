import {namedLazy} from "../../../shared/lib/utils/namedLazy.ts";

export const TodoPageLazy = namedLazy(() => import('./TodoPage.tsx'), 'TodoPage');