import { useParams } from "react-router-dom";
import Sheet from "../components/Sheet";
import sheets from "../data/sheets.json";
import { MagicItemsTable, magicItems } from "../../MagicItems";

const SheetPage = () => {
  let sheet = undefined;
  let items = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (params !== undefined && sheets[params.id] !== undefined) {
    sheet = sheets[params.id];
    items = Object.values(magicItems)
      .filter((item) => item.state?.owner === params.id)
      .sort(
        (first, second) =>
          (first.title > second.title) - (first.title < second.title)
      );

    document.title = `${sheet.name} | Кампания из Эвенглена`;
  }
  return (
    <>
      <Sheet sheetId={params.id} />
      {items?.length && <MagicItemsTable items={items} />}
    </>
  );
};

export default SheetPage;
