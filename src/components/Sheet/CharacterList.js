import Avatar from "../Avatar/Avatar";
import classes from "./CharacterList.module.css";
import { characterAssets } from "../../assets/Assets";
import sheets from "../../data/sheets.json";

const CharacterList = (props) => {
  return (
    <section className={classes.characters}>
      <ul>
        {Object.values(sheets).map((item) => (
          <Avatar
            key={item.id}
            id={item.id}
            path={"/sheets"}
            title={item.name}
            img={characterAssets[item.id].path}
            alt={characterAssets[item.id].alt}
          />
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;
