import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { charactersRoutes, charactersLoader } from "./features/Characters";
import ChangeTokenPage from "./pages/ChangeTokenPage";
import { action as changeTokenAction } from "./components/Token/ChangeToken";
import { initiativesRoutes } from "./features/Initiative";
import { InitiativePage } from "./features/Initiative";
import ErrorPage from "./pages/ErrorPage";

import { bloodwoodRoutes } from "./features/Bloodwood";
import { commentsRoutes } from "./features/Comments";
import { magicItemsRoutes } from "./features/MagicItems";
import { monstersRoutes } from "./features/Monsters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: charactersLoader },
      {
        path: "changeToken",
        element: <ChangeTokenPage />,
        action: changeTokenAction,
      },
      ...bloodwoodRoutes,
      ...charactersRoutes,
      ...monstersRoutes,
      ...magicItemsRoutes,
      ...initiativesRoutes,
      ...commentsRoutes,
    ],
  },
  {
    path: "/stream/initiatives/:id",
    element: <InitiativePage stream={true} />,
  },
]);
