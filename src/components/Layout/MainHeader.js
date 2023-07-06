import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import addCommentImage from "../../assets/addcomment.svg";

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
          <NavLink to="/addcomment" className={classes.link}>
            <img
              src={addCommentImage}
              alt="Оставить комментарий"
              className={classes.commentIcon}
            />
            <span className={classes.tooltip}>Оставить комментарий</span>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
