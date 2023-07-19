import { Fragment } from "react";
import CharacterList from "../Sheet/CharacterList";
import MagicItems from "../MagicItems/MagicItems";
import magicItems from "../../data/magicItems.json";

const HomePage = (props) => {
  document.title = "Кампания из Эвенглена";
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

  return (
    <Fragment>
      <CharacterList />
      <MagicItems entries={items} />
    </Fragment>
  );
};

export default HomePage;
