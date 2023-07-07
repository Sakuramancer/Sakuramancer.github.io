import { Fragment } from "react";
import Characters from "../Sheet/Characters";
import MagicItems from "../MagicItems/MagicItems";
import magicItems from "../../data/magicItems.json";

const HomePage = (props) => {
  document.title = "Кампания из Эвенглена";
  const items = Object.entries(magicItems)
    .filter(([key, _]) => !key.startsWith("NOT_"))
    .sort(
      ([_f, first], [_s, second]) =>
        (first.title > second.title) - (first.title < second.title)
    );

  return (
    <Fragment>
      <Characters />
      <MagicItems entries={items} />
    </Fragment>
  );
};

export default HomePage;
