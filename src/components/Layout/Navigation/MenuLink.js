import { Link } from "react-router-dom";
import classes from "./MenuLink.module.css";

const MenuLink = ({ to, label, onConfirm }) => {
  return (
    <Link to={to} className={classes.button} onClick={onConfirm}>
      {label}
    </Link>
  );
};

export default MenuLink;
