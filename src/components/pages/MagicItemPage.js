import { useParams } from "react-router-dom";
import sheets from "../../data/sheets.json";
import magicItems from "../../data/magicItems.json";
import { magicItemsAssets } from "../../assets/Assets";
import MagicItem from "../MagicItems/MagicItem";

const MagicItemPage = (props) => {
  let item = undefined;
  let asset = undefined;
  let ownerName = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (
    params !== undefined &&
    !params.id.startsWith("NOT_") &&
    magicItems[params.id] !== undefined
  ) {
    const magicItemData = magicItems[params.id];
    document.title = `${magicItemData.title} | Кампания из Эвенглена`;
    item = (magicItemData);
    asset = (magicItemsAssets[params.id]);
    ownerName = (sheets[magicItemData.state.owner].name);
  }
  return <MagicItem item={item} ownerName={ownerName} asset={asset} />;
};

export default MagicItemPage;
