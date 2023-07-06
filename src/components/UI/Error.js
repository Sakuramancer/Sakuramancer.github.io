import { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = (props) => {
  useEffect(() => {
    document.title = "Кампания из Эвенглена";
  }, []);

  return (
    <div className={classes.panel}>
      <h1>Что-то пошло не так!</h1>
      <p>Мы не нашли у себя такой страницы</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
};

export default Error;
