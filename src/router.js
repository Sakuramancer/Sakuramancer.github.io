import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import SheetPage from "./pages/SheetPage";
import BloodwoodMapPage from "./pages/BloodwoodMapPage";
import ChangeTokenPage from "./pages/ChangeTokenPage";
import InitiativePage from "./pages/Initiative/InitiativePage";
import InitiativeListPage from "./pages/Initiative/InitiativeListPage";
import ErrorPage from "./pages/ErrorPage";
import MagicItemsTablePage from "./pages/MagicItems/MagicItemsTablePage";
import MagicItemPage from "./pages/MagicItems/MagicItemPage";
import MonsterListPage from "./pages/Monsters/MonsterListPage";
import MonsterPage, { monsterHandle } from "./pages/Monsters/MonsterPage";
import AddCommentPage from "./pages/Comments/AddCommentPage";
import { sendCommentsAction } from "./features/Comments";
import AllCommentsPage from "./pages/Comments/AllCommentsPage";
import { allCommentsLoader } from "./features/Comments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "characters", element: <CharactersPage /> },
      { path: "sheets/:id", element: <SheetPage /> },
      { path: "bloodwoodMap", element: <BloodwoodMapPage /> },
      { path: "changeToken", element: <ChangeTokenPage /> },
      { path: "initiatives", element: <InitiativeListPage /> },
      { path: "initiatives/:id", element: <InitiativePage /> },
      { path: "magicItems", element: <MagicItemsTablePage /> },
      { path: "magicItems/:id", element: <MagicItemPage /> },
      { path: "monsters", element: <MonsterListPage /> },
      { path: "monsters/:id", element: <MonsterPage />, handle: monsterHandle },
      {
        path: "addcomment",
        element: <AddCommentPage />,
        action: sendCommentsAction,
      },
      {
        path: "allComments",
        element: <AllCommentsPage />,
        loader: allCommentsLoader,
      },
    ],
  },
  {
    path: "/stream/initiatives/:id",
    element: <InitiativePage stream={true} />,
  },
]);
