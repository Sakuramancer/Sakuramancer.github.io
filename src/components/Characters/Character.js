import classes from "./Character.module.css";

const Character = (props) => {
  const { id, title, img, alt } = props;

  return (
    <li className={classes.card}>
      <img className={classes.image} src={img} alt={alt} />
      <div className={classes.title}>
        {title}
      </div>
    </li>
  );
};

export default Character;
