import MagicItemsTable from "../../MagicItems/MagicItemsTable";
import magicItems from "../../../data/magicItems.json";

const MagicItemsTablePage = (props) => {
  document.title = "Предметы | Кампания из Эвенглена";

  const items = Object.entries(magicItems)
    .filter(([key, item]) => {
      if (!item.access) return true;
      if (item.access === "link-first")
        return localStorage.getItem(`${key}_access`) === "true";
      if (item.access === "none") return false;
      return true;
    })
    .sort(
      ([_f, first], [_s, second]) =>
        (first.title > second.title) - (first.title < second.title)
    );

  return <MagicItemsTable entries={items} />;
};

export default MagicItemsTablePage;
