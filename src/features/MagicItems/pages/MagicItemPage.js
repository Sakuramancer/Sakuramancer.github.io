import { useParams } from "react-router-dom";
import MagicItem from "../components/MagicItem";
import magicItems from "../data/magicItems.json";

const MagicItemPage = () => {
  document.title = "Кампания из Эвенглена";
  const params = useParams();
  if (
    params !== undefined &&
    magicItems[params.id] !== undefined &&
    magicItems[params.id].access !== "none"
  ) {
    const item = magicItems[params.id];
    document.title = `${item.title} | Кампания из Эвенглена`;
    if (item.access === "link-first")
      localStorage.setItem(`${params.id}_access`, "true");
  }
  return <MagicItem itemId={params.id} />;
};

export default MagicItemPage;
