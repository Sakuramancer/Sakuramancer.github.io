import MagicItemsTable from "../../MagicItems/MagicItemsTable";
import magicItems from "../../../data/magicItems.json";

const MagicItemsTablePage = (props) => {
  document.title = "Предметы | Кампания из Эвенглена";

  const items = Object.values(magicItems)
    .filter((item) => {
      if (!item.access) return true;
      if (item.access === "link-first")
        return localStorage.getItem(`${item.id}_access`) === "true";
      if (item.access === "none") return false;
      return true;
    })
    .sort(
      (first, second) =>
        (first.title > second.title) - (first.title < second.title)
    );

  return <MagicItemsTable items={items} />;
};

export default MagicItemsTablePage;
