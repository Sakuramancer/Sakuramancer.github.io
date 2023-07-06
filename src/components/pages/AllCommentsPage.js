import { useEffect } from "react";
import AllComments from "../Comments/AllComments";

const AllCommentsPage = () => {
  useEffect(() => {
    document.title = "Все комментарии | Кампания из Эвенглена";
  }, []);
  return <AllComments />;
};

export default AllCommentsPage;
