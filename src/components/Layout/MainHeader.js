import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

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
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
