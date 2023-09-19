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
    items = Object.values(magicItems)
      .filter((item) => item.state && item.state.owner === params.id);

    document.title = `${sheet.name} | Кампания из Эвенглена`;
  }
  return (
    <>
      <Sheet sheetId={params.id} sheet={sheet} asset={asset} />
      {items && items.length > 0 && <MagicItems items={items} />}
    </>
  );
};

export default SheetPage;
