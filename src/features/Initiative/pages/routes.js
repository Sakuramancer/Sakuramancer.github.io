import InitiativeListPage from "./InitiativeListPage";
import InitiativePage from "./InitiativePage";

export const routes = [
  { path: "initiatives", element: <InitiativeListPage /> },
  { path: "initiatives/:id", element: <InitiativePage /> },
];
