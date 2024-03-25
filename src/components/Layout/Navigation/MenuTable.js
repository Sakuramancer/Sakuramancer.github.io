import MenuLink from "./MenuLink";
import { menuData } from "../../../utils/menu";

import classes from "./MenuTable.module.css";
import palletes from "../../../palletes.module.css";

const MenuTable = ({ schemeId, onConfirm }) => {
  const pallete = palletes[schemeId];
  return (
    <div className={[classes.menu, pallete].join(" ")}>
      {menuData
        .filter(
          (item) =>
            item.type === "line" || (item.type === "link" && item.visible)
        )
        .map((item, index) => {
          if (item.type === "link") {
            return (
              <MenuLink
                key={index}
                to={item.to}
                label={item.label}
                onConfirm={onConfirm}
              />
            );
          }
          return <div key={index} className={classes.line} />;
        })}
    </div>
  );
};

export default MenuTable;
