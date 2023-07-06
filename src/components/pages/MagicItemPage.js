import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sheets from "../../data/sheets.json";
import magicItems from "../../data/magicItems.json";
import { magicItemsAssets } from "../UI/Assets";
import MagicItem from "../MagicItems/MagicItem";

const MagicItemPage = (props) => {
  const [item, setItem] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const [ownerName, setOwnerName] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    if (
      params === undefined ||
      params.id.startsWith("NOT_") ||
      magicItems[params.id] === undefined
    ) {
      document.title = "Кампания из Эвенглена";
      setItem(undefined);
      setAsset(undefined);
      setOwnerName(undefined);
      return;
    }
    const magicItemData = magicItems[params.id];
    document.title = `${magicItemData.title} | Кампания из Эвенглена`;
    setItem(magicItemData);
    setAsset(magicItemsAssets[params.id]);
    setOwnerName(sheets[magicItemData.state.owner].name);
  }, [params]);

  return <MagicItem item={item} ownerName={ownerName} asset={asset} />;
};

export default MagicItemPage;
