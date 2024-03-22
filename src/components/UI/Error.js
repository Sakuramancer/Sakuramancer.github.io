import { Link, useLocation } from "react-router-dom";
import { getScheme } from "../../utils/schemes";

import classes from "./Error.module.css";

const Error = ({ message }) => {
  const { pathname } = useLocation();
  const schemePath = getScheme(pathname).path;

  return (
    <div className={classes.panel}>
      <h1>Что-то пошло не так!</h1>
      <p>{message || "Мы не нашли у себя такой страницы"}</p>
      <Link to={schemePath}>Вернуться на главную страницу</Link>
    </div>
  );
};

export default Error;
