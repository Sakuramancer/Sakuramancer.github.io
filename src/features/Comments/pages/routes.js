import AddCommentPage from "./AddCommentPage";
import AllCommentsPage from "./AllCommentsPage";
import { loader as allCommentsLoader } from "../components/AllComments";
import { action as sendCommentsAction } from "../components/CommentsForm";

export const routes = [
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
];
