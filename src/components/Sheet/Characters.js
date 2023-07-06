import Character from "./Character";
import classes from "./Characters.module.css";
import { characterAssets } from "../UI/Assets";
import sheets from "../../data/sheets.json";

const Characters = (props) => {
  return (
    <section className={classes.characters}>
      <ul>
        {Object.entries(sheets).map(([key, item]) => (
          <Character
            key={key}
            id={key}
            title={item.name}
            img={characterAssets[key].path}
            alt={characterAssets[key].alt}
          />
        ))}
      </ul>
    </section>
  );
};

export default Characters;
