import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sheet from "../Sheet/Sheet";
import sheets from "../Sheet/sheets.json"
import { assets } from "../UI/Assets";

const SheetPage = (props) => {
  const [sheet, setSheet] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const params = useParams()

  useEffect(() => {
    if (params === undefined || sheets[params.id] === undefined) {
      document.title = "Кампания из Эвенглена"
      setSheet(undefined)
      setAsset(undefined)
      return;
    }
    const sheetData = sheets[params.id]
    document.title = `${sheetData.name} | Кампания из Эвенглена`
    setSheet(sheetData)
    setAsset(assets[params.id])
  }, [params]);

  return (
    <Sheet sheet={sheet} asset={asset} />
  );
}

export default SheetPage;
