import SheetPage from "./SheetPage";
import CharactersPage from "./CharactersPage";
import { loader as charactersLoader } from "../components/CharacterList";

export const routes = [
  { path: "characters/:id", element: <SheetPage /> },
  {
    path: "characters",
    element: <CharactersPage />,
    loader: charactersLoader,
  },
];
