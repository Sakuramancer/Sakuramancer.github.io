import Avatar from "../Avatar/Avatar";
import classes from "./MonsterList.module.css";
import { monsterAssets } from "../../assets/Assets";

const MonsterList = ({ items }) => {
  return (
    <section className={classes.monsters}>
      <ul>
        {items.map(([key, item]) => {
          let asset = monsterAssets[key];
          if (!asset) asset = { path: "", alt: "" };
          return (
            <Avatar
              key={key}
              id={key}
              path={"."}
              title={item.name}
              img={asset.path}
              alt={asset.alt}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MonsterList;
