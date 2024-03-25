import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import {
  CharactersPage,
  charactersRoutes,
  charactersLoader,
} from "./features/Characters";
import { InitiativePage, initiativesRoutes } from "./features/Initiative";
import { commentsRoutes } from "./features/Comments";
import { sessionsRoutes } from "./features/Sessions";
import { changeTokenRoutes } from "./features/Token";
import { magicItemsRoutes } from "./features/MagicItems";
import { monstersRoutes } from "./features/Monsters";
import { darkAgeRoutes } from "./features/DarkAge";
import { action as passKeyAction } from "./components/PassKeyLink";
import { rootLoader, schemeLoader } from "./utils/schemes";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        action: passKeyAction,
        loader: rootLoader,
      },
      {
        path: "kie",
        element: <Layout />,
        loader: schemeLoader,
        children: [
          {
            index: true,
            element: <CharactersPage />,
            loader: charactersLoader,
          },
          ...changeTokenRoutes,
          ...charactersRoutes,
          ...monstersRoutes,
          ...sessionsRoutes,
          ...magicItemsRoutes,
          ...initiativesRoutes,
          ...commentsRoutes,
        ],
      },
      {
        path: "darkAge",
        element: <Layout />,
        children: darkAgeRoutes,
        loader: schemeLoader,
      },
      {
        path: "/kie/stream/initiatives/:id",
        element: <InitiativePage stream={true} />,
        loader: schemeLoader,
      },
    ],
  },
]);
