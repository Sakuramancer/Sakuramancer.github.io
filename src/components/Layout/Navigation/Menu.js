import { useState } from "react";
import ReactDOM from "react-dom";
import { Tooltip } from "../../UI";
import { MenuSvg } from "../../svg";
import MenuTable from "./MenuTable";
import Backdrop from "../Backdrop";

import classes from "./Menu.module.css";

const Menu = ({ schemeId }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuHandler = () => {
    setMenuVisible((value) => !value);
  };

  return (
    <div className={classes.link}>
      <Tooltip label="Меню" visible={!menuVisible}>
        <div className={classes.token} onClick={menuHandler}>
          <MenuSvg size="32px" />
        </div>
      </Tooltip>
      {menuVisible &&
        ReactDOM.createPortal(
          <Backdrop onClick={menuHandler} />,
          document.getElementById("backdrop-root")
        )}
      {menuVisible &&
        ReactDOM.createPortal(
          <MenuTable schemeId={schemeId} onConfirm={menuHandler} />,
          document.getElementById("overlay-root")
        )}
    </div>
  );
};

export default Menu;
