import { Link } from "react-router-dom";
import classes from "./InitiativeList.module.css";
import TokenSvg from "../svg/TokenSvg";

const InitiativeList = ({ data }) => {
  return (
    <section className={classes.main}>
      <ul className={classes.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>
              <div className={classes.initiative}>
                <div className={classes.date}>{item.date}</div>
                <div
                  className={classes.title}
                >{`${item.session} – ${item.title}`}</div>
                <div className={classes.order}>
                  {item.order
                    .sort(
                      (first, second) =>
                        (first.value < second.value) -
                        (first.value > second.value)
                    )
                    .map((item, index) => (
                      <TokenSvg
                        key={index}
                        className={classes.token}
                        mainColor={item.token.mainColor}
                        backColor={item.token.backColor}
                        letter={
                          item.token.letter ? item.token.letter : item.name
                        }
                        border={item.token.border}
                      />
                    ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InitiativeList;
