import { Link } from "react-router-dom";
import classes from "./Character.module.css";

const Character = (props) => {
  const { id, title, img, alt } = props;

  return (
    <li className={classes.card}>
      <Link to="/sheet">
        <img className={classes.image} src={img} alt={alt} />
        <div className={classes.title}>
          {title}
        </div>
      </Link>
    </li>
  );
};

export default Character;
