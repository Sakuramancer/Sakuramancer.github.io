import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage";
import SheetPage from "./components/pages/SheetPage";
import ErrorPage from "./components/pages/ErrorPage";
import MagicItemPage from "./components/pages/MagicItems/MagicItemPage";
import MonsterListPage from "./components/pages/Monsters/MonsterListPage";
import MonsterPage from "./components/pages/Monsters/MonsterPage";
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
      { path: "sheets/:id", element: <SheetPage /> },
      { path: "magicItems/:id", element: <MagicItemPage /> },
      { path: "monsters", element: <MonsterListPage /> },
      { path: "monsters/:id", element: <MonsterPage /> },
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
]);

const App = (props) => {
  return <RouterProvider router={router} />;
};

export default App;
