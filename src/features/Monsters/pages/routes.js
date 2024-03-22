import MonsterListPage from "./MonsterListPage";
import NewMonsterPage from "./NewMonsterPage";
import MonsterPage, { monsterHandle } from "./MonsterPage";

export const routes = [
  { path: "monsters", element: <MonsterListPage /> },
  { path: "monsters/new", element: <NewMonsterPage /> },
  { path: "monsters/:id", element: <MonsterPage />, handle: monsterHandle },
];
