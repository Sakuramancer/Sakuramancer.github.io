import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = ({ className, onConfirm }) => {
  const linkTo = (src, label) => (
    <Link to={src} className={classes.button} onClick={onConfirm}>
      {label}
    </Link>
  );
  return (
    <div className={[classes.menu, className].join(" ")}>
      {false && <div className={classes.button}>Ссылки</div>}
      {linkTo("/characters", "Персонажи")}
      {linkTo("/magicItems", "Предметы")}
      {false && <div className={classes.button}>Заклинания</div>}
      {linkTo("/monsters", "Монстры")}
      <div className={classes.line} />
      {linkTo("/initiatives", "Инициативы")}
      <div className={classes.line} />
      {linkTo("/addComment", "Оставить комментарий")}
      {false && <div className={classes.button}>Настройки</div>}
    </div>
  );
};

export default Menu;
