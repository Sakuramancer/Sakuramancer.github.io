import { useParams } from "react-router-dom";
import { Sheet, sheets } from "../features/Characters";
import { MagicItems, magicItems } from "../features/MagicItems";

const SheetPage = () => {
  let sheet = undefined;
  let items = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (params !== undefined && sheets[params.id] !== undefined) {
    sheet = sheets[params.id];
    items = Object.values(magicItems)
      .filter((item) => item.state && item.state.owner === params.id);

    document.title = `${sheet.name} | Кампания из Эвенглена`;
  }
  return (
    <>
      <Sheet sheetId={params.id} />
      {items && items.length > 0 && <MagicItems items={items} />}
    </>
  );
};

export default SheetPage;