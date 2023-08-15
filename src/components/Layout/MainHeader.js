import { NavLink } from "react-router-dom";
import AddCommentSvg from "../svg/AddCommentSvg";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.mobile}>
        <h1>КиЭ</h1>
      </NavLink>
      <NavLink to="/" className={classes.desktop}>
        <h1>Кампания из Эвенглена</h1>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/addcomment" className={classes.link}>
              <AddCommentSvg className={classes.commentIcon} />
              <span className={classes.tooltip}>Оставить комментарий</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
