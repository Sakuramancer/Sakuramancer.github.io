import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage";
import CharactersPage from "./components/pages/CharactersPage";
import SheetPage from "./components/pages/SheetPage";
import BloodwoodMapPage from "./components/pages/BloodwoodMapPage";
import ChangeTokenPage from "./components/pages/ChangeTokenPage";
import InitiativePage from "./components/pages/Initiative/InitiativePage";
import InitiativeListPage from "./components/pages/Initiative/InitiativeListPage";
import ErrorPage from "./components/pages/ErrorPage";
import MagicItemsTablePage from "./components/pages/MagicItems/MagicItemsTablePage";
import MagicItemPage from "./components/pages/MagicItems/MagicItemPage";
import MonsterListPage from "./components/pages/Monsters/MonsterListPage";
import MonsterPage, {
  monsterHandle,
} from "./components/pages/Monsters/MonsterPage";
import AddCommentPage from "./components/pages/Comments/AddCommentPage";
import { action as sendCommentsAction } from "./components/Comments/CommentsForm";
import AllCommentsPage from "./components/pages/Comments/AllCommentsPage";
import { loader as allCommentsLoader } from "./components/Comments/AllComments";

const router = createBrowserRouter([
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
  { path: "/stream/initiatives/:id", element: <InitiativePage stream={true} /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
