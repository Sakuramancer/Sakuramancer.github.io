import ChangeTokenPage from "./ChangeTokenPage";
import { action as changeTokenAction } from "../components/ChangeToken";

export const routes = [
  {
    path: "changeToken",
    element: <ChangeTokenPage />,
    action: changeTokenAction,
  },
];
