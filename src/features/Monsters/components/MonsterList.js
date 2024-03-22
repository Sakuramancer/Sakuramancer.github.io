import { Link } from "react-router-dom";
import { monsterAssets } from "../assets";
import classes from "./MonsterList.module.css";

const MonsterList = ({ items }) => {
  return (
    <section className={classes.main}>
      <ul className={classes.list}>
        {items.map((item) => {
          let asset = monsterAssets[item.id];
          return (
            <Link
              to={`/kie/monsters/${item.id}`}
              key={item.id}
              className={classes.link}
            >
              <li className={classes.card}>
                {asset && (
                  <img
                    className={classes.image}
                    src={asset.path}
                    alt={asset.alt}
                  />
                )}
                {!asset && <div className={classes.placeholder} />}
                <div className={classes.title}>{item.name}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default MonsterList;
