import MonsterList from "../components/MonsterList";
import monsters from "../data/monsters.json";

const MonsterListPage = () => {
  document.title = "Монстры КиЭ 35 | Кампания из Эвенглена";
  const items = Object.values(monsters)
    .sort(
      (first, second) =>
        (first.title > second.title) - (first.title < second.title)
    );
  return <MonsterList items={items} />;
};

export default MonsterListPage;
