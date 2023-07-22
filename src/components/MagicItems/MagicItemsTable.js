import { NavHashLink } from "react-router-hash-link";
import MagicItem from "./MagicItem";
import sheets from "../../data/sheets.json";
import { itemIconAssets } from "../../assets/Assets";
import { magicItemsAssets } from "../../assets/Assets";
import { useQuery } from "../../hooks/useQuery";

import classes from "./MagicItemsTable.module.css";
import { Fragment } from "react";

const MagicItemsTable = (props) => {
  const { entries } = props;
  const dict = {};
  entries.forEach(([key, item]) => {
    dict[key] = item;
  });
  const query = useQuery();

  const itemBlock = () => {
    const itemId = query.get("item");
    if (!itemId) return <div id="content" className={classes.hidden} />;

    if (dict[itemId].access === "none") return;
    const item = dict[itemId];
    document.title = `${item.title} | Кампания из Эвенглена`;
    const asset = magicItemsAssets[itemId];
    let ownerName = undefined;
    if (item.state && item.state.owner)
      ownerName = sheets[item.state.owner].name;
    return <MagicItem item={item} ownerName={ownerName} asset={asset} />;
  };

  return (
    <Fragment>
      <section className={classes.main}>
        <div className={classes.header}>
          <h1>Магические предметы</h1>
          {/* <div className={classes.search}>
        <form><input></input></form>
        </div> */}
        </div>
        <ul className={classes.list}>
          {entries.map(([key, item]) => (
            <NavHashLink
              smooth
              to={`?item=${key}#content`}
              key={key}
              className={classes.link}
            >
              <li
                className={
                  (() => {
                    const itemId = query.get("item");
                    return key === itemId
                      ? `${classes.slide} ${classes.activeSlide}`
                      : `${classes.slide} ${classes.notActiveSlide}`;
                  })()
                  // classes.slide
                }
              >
                <img
                  src={itemIconAssets[item.asset].path}
                  alt={itemIconAssets[item.asset].alt}
                  className={classes.itemIcon}
                />
                <div>{item.title}</div>
              </li>
            </NavHashLink>
          ))}
        </ul>
      </section>
      {itemBlock()}
    </Fragment>
  );
};

export default MagicItemsTable;
