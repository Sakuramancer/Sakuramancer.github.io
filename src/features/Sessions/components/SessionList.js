import arks from "../data/arks.json";
import classes from "./SessionList.module.css";

const SessionList = ({ data }) => {
  return (
    <section className={classes.main}>
      <h1>Список сессий</h1>
      <ul>
        {data.map((item) => {
          const color = arks[item.ark]?.color ?? "";
          return (
            <li key={item.id}>
              <div className={classes.session}>
                <div
                  className={classes.title}
                  style={{ backgroundColor: color }}
                >
                  <span className={classes.code}>{item.code}</span>
                  <span className={classes.name}>{item.name}</span>
                  <span className={classes.date}>{item.date}</span>
                </div>
                <div className={classes.description}>{item.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SessionList;
