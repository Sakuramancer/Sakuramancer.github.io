import MonsterListPage from "./MonsterListPage";
import MonsterPage, { monsterHandle } from "./MonsterPage";

export const routes = [
  { path: "monsters", element: <MonsterListPage /> },
  { path: "monsters/:id", element: <MonsterPage />, handle: monsterHandle },
];
