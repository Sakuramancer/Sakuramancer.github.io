import MonsterList from "../../Monsters/MonsterList";
import monsters from "../../../data/monsters.json";

const MonsterListPage = (props) => {
  document.title = "Монстры КиЭ 35 | Кампания из Эвенглена";
  const items = Object.entries(monsters)
    // .filter(([_, item]) => item.faction === "keranga")
    .sort(
      ([_f, first], [_s, second]) =>
        (first.title > second.title) - (first.title < second.title)
    );
    console.log(items);
  return (
      <MonsterList items={items} />
  );
};

export default MonsterListPage;
