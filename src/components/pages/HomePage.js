import { Fragment } from "react";
import CharacterList from "../Sheet/CharacterList";
import MagicItems from "../MagicItems/MagicItems";
import magicItems from "../../data/magicItems.json";

const HomePage = (props) => {
  document.title = "Кампания из Эвенглена";
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

  return (
    <Fragment>
      <CharacterList />
      <MagicItems items={items} />
    </Fragment>
  );
};

export default HomePage;
