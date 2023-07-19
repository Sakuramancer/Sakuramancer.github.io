import { useParams } from "react-router-dom";
import Monster from "../../Monsters/Monster";
import monsters from "../../../data/monsters.json";
import { monsterAssets } from "../../../assets/Assets";

const MonsterPage = (props) => {
  let monster = undefined;
  let asset = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (params !== undefined && monsters[params.id] !== undefined) {
    monster = monsters[params.id];
    asset = monsterAssets[params.id];
    if (!asset) asset = { path: "", alt: "" };
    document.title = `${monster.name} | Кампания из Эвенглена`;
  }
  return <Monster monster={{ id: params.id, ...monster }} asset={asset} />;
};

export default MonsterPage;
