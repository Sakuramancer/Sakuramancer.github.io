import MagicItemsTablePage from "./MagicItemsTablePage";
import MagicItemPage from "./MagicItemPage";

export const routes = [
  { path: "magicItems", element: <MagicItemsTablePage /> },
  { path: "magicItems/:id", element: <MagicItemPage /> },
];
