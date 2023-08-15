import { useQuery } from "../../hooks/useQuery";
import sheets from "../../data/sheets.json";
import ChangeToken from "../ChangeToken";

const ChangeTokenPage = (props) => {
  let sheetId = undefined;
  let sheet = undefined;
  document.title = "Изменить токен | Кампания из Эвенглена";
  const query = useQuery();
  sheetId = query.get("sheet");
  if (sheetId !== undefined) {
    sheet = sheets[sheetId];
  }
  return <ChangeToken sheetId={sheetId} sheet={sheet} />;
};

export default ChangeTokenPage;
