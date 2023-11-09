import { Fragment } from "react";
import { NavHashLink } from "react-router-hash-link";
import MagicItem from "./MagicItem";
import { itemIconAssets } from "../assets/Assets";
import { useQuery } from "../../../hooks/useQuery";

import classes from "./MagicItemsTable.module.css";

const MagicItemsTable = ({ items }) => {
  const query = useQuery();
  const itemId = query.get("item");

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
    </Fragment>
  );
};

export default MagicItemsTable;