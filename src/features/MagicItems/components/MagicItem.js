import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Error from "../../../components/UI/Error";
import magicItems from "../data/magicItems.json";
import { sheets } from "../../../features/Characters";
import { magicItemsAssets } from "../assets/Assets";
import classes from "./MagicItem.module.css";

const MagicItem = (props) => {
  const { itemId } = props;
  const { pathname } = useLocation();

  if (magicItems[itemId].access === "none") return;
  const item = magicItems[itemId];
  const asset = magicItemsAssets[itemId];
  let ownerName = undefined;
  if (item.state && item.state.owner)
    ownerName = sheets[item.state.owner].name;

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
            <Link to={`/characters/${item.state.owner}`}>{ownerName}</Link>
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
