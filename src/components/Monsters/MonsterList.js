import Avatar from "../Avatar/Avatar";
import classes from "./MonsterList.module.css";
import { monsterAssets } from "../../assets/Assets";

const MonsterList = ({ items }) => {
  return (
    <section className={classes.monsters}>
      <ul>
        {items.map(([key, item]) => (
          <Avatar
            key={key}
            id={key}
            path={"."}
            title={item.name}
            img={monsterAssets[key].path}
            alt={monsterAssets[key].alt}
          />
        ))}
      </ul>
    </section>
  );
};

export default MonsterList;
