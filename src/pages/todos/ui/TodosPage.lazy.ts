import {namedLazy} from "../../../shared/lib/utils/namedLazy.ts";

export const TodosPageLazy = namedLazy(() => import('./TodosPage.tsx'), 'TodosPage');
