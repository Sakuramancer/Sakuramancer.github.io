import { useParams } from "react-router-dom";
import Sheet from "../Sheet/Sheet";
import sheets from "../../data/sheets.json";
import { characterAssets } from "../../assets/Assets";
import MagicItems from "../MagicItems/MagicItems";
import magicItems from "../../data/magicItems.json";

const SheetPage = (props) => {
  let sheet = undefined;
  let asset = undefined;
  let items = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (params !== undefined && sheets[params.id] !== undefined) {
    sheet = sheets[params.id];
    asset = characterAssets[params.id];
    items = Object.entries(magicItems)
    .filter(([key, _]) => !key.startsWith("NOT_"))
    .filter(([_, item]) => item.state.owner === params.id);
    
    document.title = `${sheet.name} | Кампания из Эвенглена`;
  }
  return (
    <>
      <Sheet sheet={sheet} asset={asset} />
      {items && items.length > 0 && <MagicItems entries={items} />}
    </>
  );
};

export default SheetPage;
