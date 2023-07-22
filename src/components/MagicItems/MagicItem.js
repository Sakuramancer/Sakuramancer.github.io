import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Error from "../UI/Error";
import classes from "./MagicItem.module.css";

const MagicItem = (props) => {
  const { item, ownerName, asset } = props;
  const { pathname } = useLocation();

  if (item === undefined) return <Error />;
  return (
    <Fragment>
      <section id="content" className={classes.main}>
        {asset !== undefined && <img src={asset.path} alt={asset.alt} />}
        <h1 className={classes.title}>{item.title}</h1>
        <em className={classes.category}>
          {`${item.type}, ${item.rarity}${
            item.attunement ? " (требуется настройка)" : ""
          }`}
        </em>
        {item.state && item.state.owner && (
          <div className={classes.owner}>
            Владелец:{" "}
            <Link to={`/sheets/${item.state.owner}`}>{ownerName}</Link>
          </div>
        )}
        <div className={classes.description}>
          {item.description.map((line, index) => (
            <ReactMarkdown key={index}>{line}</ReactMarkdown>
          ))}
        </div>
      </section>
      {pathname !== "/magicItems" && (
        <Link to="/magicItems" className={classes.link}>
          Все предметы
        </Link>
      )}
    </Fragment>
  );
};

export default MagicItem;
