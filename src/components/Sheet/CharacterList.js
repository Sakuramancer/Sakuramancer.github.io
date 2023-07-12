import Avatar from "../Avatar/Avatar";
import classes from "./CharacterList.module.css";
import { characterAssets } from "../../assets/Assets";
import sheets from "../../data/sheets.json";

const CharacterList = (props) => {
  return (
    <section className={classes.characters}>
      <ul>
        {Object.entries(sheets).map(([key, item]) => (
          <Avatar
            key={key}
            id={key}
            path={"sheets"}
            title={item.name}
            img={characterAssets[key].path}
            alt={characterAssets[key].alt}
          />
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;
