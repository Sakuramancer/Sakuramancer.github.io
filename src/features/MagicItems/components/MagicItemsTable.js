import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import MagicItem from "./MagicItem";
import { itemIconAssets } from "../assets";

import classes from "./MagicItemsTable.module.css";

const MagicItemsTable = ({ items }) => {
  const { pathname, search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const itemId = query.get("item");

  return (
    <>
      <section className={classes.main}>
        <div className={classes.header}>
          <h1 className={classes.mobile}>Предметы</h1>
          <h1 className={classes.desktop}>Магические предметы</h1>
          {pathname !== "/kie/magicItems" && (
            <div className={classes.allItems}>
              <Link to="/kie/magicItems">Все предметы</Link>
            </div>
          )}
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
                      ? [classes.slide, classes.activeSlide]
                      : [classes.slide, classes.notActiveSlide];
                  })().join(" ")
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
      {!itemId && <div id="content" className={classes.hidden} />}
      {itemId && <MagicItem itemId={itemId} />}
    </>
  );
};

export default MagicItemsTable;
