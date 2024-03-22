import { NavLink } from "react-router-dom";
import { schemes } from "../../utils/schemes";

import classes from "./MainHeader.module.css";

const MainHeader = ({ schemeId }) => {
  const scheme = schemes[schemeId];

  return (
    <header className={classes.header}>
      <NavLink to={scheme.path} className={classes.mobile}>
        <h1>{scheme.shortTitle}</h1>
      </NavLink>
      <NavLink to={scheme.path} className={classes.desktop}>
        <h1>{scheme.title}</h1>
      </NavLink>
    </header>
  );
};

export default MainHeader;
