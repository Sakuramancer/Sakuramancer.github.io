import SheetPage from "./SheetPage";
import CharactersPage from "./CharactersPage";
import { loader as charactersLoader } from "../components/CharacterList";

export const routes = [
  {
    path: "characters",
    children: [
      { path: ":id", element: <SheetPage /> },
      {
        index: true,
        element: <CharactersPage />,
        loader: charactersLoader,
      },
    ],
  },
];
