import { useParams } from "react-router-dom";
import sheets from "../../../data/sheets.json";
import magicItems from "../../../data/magicItems.json";
import { magicItemsAssets } from "../../../assets/Assets";
import MagicItem from "../../MagicItems/MagicItem";

const MagicItemPage = (props) => {
  let item = undefined;
  let asset = undefined;
  let ownerName = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (
    params !== undefined &&
    magicItems[params.id] !== undefined &&
    magicItems[params.id].access !== "none"
  ) {
    item = magicItems[params.id];
    document.title = `${item.title} | Кампания из Эвенглена`;
    asset = magicItemsAssets[params.id];
    if (item.state && item.state.owner)
      ownerName = sheets[item.state.owner].name;
    if (item.access === "link-first")
      localStorage.setItem(`${params.id}_access`, "true");
  }
  return <MagicItem item={item} ownerName={ownerName} asset={asset} />;
};

export default MagicItemPage;
