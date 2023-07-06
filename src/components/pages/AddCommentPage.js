import { useEffect } from "react";
import CommentsForm from "../Comments/CommentsForm";

const AddCommentPage = () => {
  useEffect(() => {
    document.title = "Оставить комментарий | Кампания из Эвенглена";
  }, []);
  return <CommentsForm />;
};

export default AddCommentPage;
