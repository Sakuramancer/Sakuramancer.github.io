import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sheet from "../Sheet/Sheet";
import sheets from "../../data/sheets.json";
import { characterAssets } from "../UI/Assets";
import MagicItems from "../MagicItems/MagicItems";
import magicItems from "../../data/magicItems.json";

const SheetPage = (props) => {
  const [sheet, setSheet] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const [items, setItems] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    if (params === undefined || sheets[params.id] === undefined) {
      document.title = "Кампания из Эвенглена";
      setSheet(undefined);
      setAsset(undefined);
      setItems(undefined);
      return;
    }
    const sheetData = sheets[params.id];
    document.title = `${sheetData.name} | Кампания из Эвенглена`;
    setSheet(sheetData);
    setAsset(characterAssets[params.id]);
    setItems(
      Object.entries(magicItems)
        .filter(([key, _]) => !key.startsWith("NOT_"))
        .filter(([_, item]) => item.state.owner === params.id)
    );
  }, [params]);

  return (
    <>
      <Sheet sheet={sheet} asset={asset} />
      {items && items.length > 0 && <MagicItems entries={items} />}
    </>
  );
};

export default SheetPage;
