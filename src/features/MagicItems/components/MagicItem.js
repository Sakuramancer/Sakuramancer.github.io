import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Error } from "../../../components/UI";
import { sheets } from "../../../features/Characters";
import { magicItemsAssets } from "../assets";
import magicItems from "../data/magicItems.json";
import classes from "./MagicItem.module.css";

const MagicItem = ({ itemId }) => {
  if (magicItems[itemId].access === "none") return;
  const item = magicItems[itemId];
  const asset = magicItemsAssets[itemId];
  let ownerName = undefined;
  if (item.state?.owner) {
    ownerName = sheets[item.state.owner].name;
  }

  if (item === undefined) return <Error />;
  return (
    <section id="content" className={classes.main}>
      {asset && <img src={asset.path} alt={asset.alt} />}
      <h1 className={classes.title}>{item.title}</h1>
      <em className={classes.category}>
        {`${item.type}, ${item.rarity}${
          item.attunement ? " (требуется настройка)" : ""
        }`}
      </em>
      {item.state?.owner && (
        <div className={classes.owner}>
          {"Владелец: "}
          <Link to={`/kie/characters/${item.state.owner}`}>{ownerName}</Link>
        </div>
      )}
      <div className={classes.description}>
        {item.description.map((line, index) => (
          <ReactMarkdown key={index}>{line}</ReactMarkdown>
        ))}
      </div>
    </section>
  );
};

export default MagicItem;
