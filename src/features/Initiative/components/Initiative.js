import { Link } from "react-router-dom";
import { TokenSvg } from "../../../components/svg";

import classes_main from "./Initiative.module.css";
import classes_stream from "./Initiative_stream.module.css";

const Initiative = ({ stream = false, data }) => {
  const classes = stream ? classes_stream : classes_main;

  return (
    <>
      <section className={classes.main}>
        {!stream && (
          <section className={classes.description}>
            <h1 className={classes.title}>{data.title}</h1>
          </section>
        )}
        <section className={classes.order}>
          {data.order
            .filter((item) =>
              item.visible === undefined ? true : !stream || item.visible
            )
            .sort(
              (first, second) =>
                (first.value < second.value) - (first.value > second.value)
            )
            .map((item, index) => {
              const deadOrAlive = item.dead ? classes.dead : classes.alive;
              return (
                <Link to={`/kie/${item.type}/${item.id}`} key={index}>
                  <div className={[deadOrAlive, classes.unit].join(" ")}>
                    <TokenSvg
                      size="48px"
                      className={classes.token}
                      mainColor={item.token.mainColor}
                      backColor={item.token.backColor}
                      letter={item.token.letter ?? item.name}
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
      {!stream && (
        <div className={classes.links}>
          <Link
            to={`/kie/stream/initiatives/${data.id}`}
            className={classes.link}
          >
            Версия для стрима
          </Link>
          <Link to="/kie/initiatives" className={classes.link}>
            Назад к списку
          </Link>
        </div>
      )}
    </>
  );
};

export default Initiative;
