import { useParams } from "react-router-dom";
import Sheet from "../components/Sheet";
import characters from "../data/characters.json";

const SheetPage = () => {
  let sheet = undefined;
  document.title = "Вампиры. Темные века";
  const params = useParams();

  if (params !== undefined && characters[params.id] !== undefined) {
    sheet = characters[params.id];
    document.title = `${sheet.name} | Темные века`;
  }
  return <Sheet sheetId={params.id} />;
};

export default SheetPage;
