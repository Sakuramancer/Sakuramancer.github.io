import { Link } from "react-router-dom";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
  const { id, title, path, img, alt } = props;

  return (
    <li className={classes.card}>
      <Link to={`${path}/${id}`}>
        <img className={classes.image} src={img} alt={alt} />
        <div className={classes.title}>{title}</div>
      </Link>
    </li>
  );
};

export default Avatar;
