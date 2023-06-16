import Card from "../UI/Card";
import classes from "./Character.module.css";

const Character = (props) => {
  const { id, title, img, alt } = props;

  return (
    <li className={classes.item}>
      <Card>
        <img className={classes.image} src={img} alt={alt} height="300" />
        <div className={classes.title}>
          {title}
          </div>
      </Card>
    </li>
  );
};

export default Character;
