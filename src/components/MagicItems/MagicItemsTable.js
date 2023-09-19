import { NavHashLink } from "react-router-hash-link";
import MagicItem from "./MagicItem";
import sheets from "../../data/sheets.json";
import { itemIconAssets } from "../../assets/Assets";
import { magicItemsAssets } from "../../assets/Assets";
import { useQuery } from "../../hooks/useQuery";

import classes from "./MagicItemsTable.module.css";
import { Fragment } from "react";

const MagicItemsTable = ({ items }) => {
  const dict = {};
  items.forEach((item) => {
    dict[item.id] = item;
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
          {items.map((item) => (
            <NavHashLink
              smooth
              to={`?item=${item.id}#content`}
              key={item.id}
              className={classes.link}
            >
              <li
                className={
                  (() => {
                    const itemId = query.get("item");
                    return item.id === itemId
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
