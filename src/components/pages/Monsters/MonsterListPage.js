import MonsterList from "../../Monsters/MonsterList";
import monsters from "../../../data/monsters.json";

const MonsterListPage = (props) => {
  document.title = "Монстры КиЭ 35 | Кампания из Эвенглена";
  const items = Object.values(monsters)
    // .filter((item) => item.faction === "keranga")
    .sort(
      (first, second) =>
        (first.title > second.title) - (first.title < second.title)
    );
  return <MonsterList items={items} />;
};

export default MonsterListPage;
