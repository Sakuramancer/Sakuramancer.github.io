import { Fragment } from "react";
import { Link } from "react-router-dom";
import TokenSvg from "../svg/TokenSvg";

import classes_main from "./Initiative.module.css";
import classes_stream from "./Initiative_stream.module.css";

const Initiative = ({ stream = false, data }) => {
  const classes = stream ? classes_stream : classes_main;

  return (
    <Fragment>
      <section className={classes.main}>
        <section className={classes.description}>
          <h1 className={classes.title}>{data.title}</h1>
        </section>
        <section className={classes.order}>
          {data.order
            .filter(item => item.visible === undefined ? true : !stream || item.visible)
            .sort(
              (first, second) =>
                (first.value < second.value) - (first.value > second.value)
            )
            .map((item, index) => {
              const dead_or_alive = item.dead ? classes.dead : classes.alive;
              return (
                <Link to={`/${item.type}/${item.id}`} key={index}>
                <div className={`${dead_or_alive} ${classes.unit}`}>
                  <TokenSvg
                    className={classes.token}
                    mainColor={item.token.mainColor}
                    backColor={item.token.backColor}
                    letter={item.token.letter ? item.token.letter : item.name}
                    border={item.token.border}
                  />
                  <div className={classes.name}>{item.name}</div>
                  <div className={classes.value}>{item.value}</div>
                </div>
                </Link>
              );
            })}
        </section>
      </section>
      <div className={classes.links}>
        <Link to={`/stream/initiatives/${data.id}`} className={classes.link}>
          Версия для стрима
        </Link>
        <Link to="/initiatives" className={classes.link}>
          Назад к списку
        </Link>
      </div>
    </Fragment>
  );
};

export default Initiative;
