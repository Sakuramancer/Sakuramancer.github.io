import classes from "./Bullets.module.css";

const Bullets = ({ max, value }) => {
  return (
    <span className={classes.bullets}>
      {[...Array(max).keys()].map((el) => {
        const active = el < value ? classes.active : "";
        return (
          <div key={el} className={`${classes.border} ${active}`.trim()}>
            <div className={`${classes.circle} ${active}`.trim()} />
          </div>
        );
      })}
    </span>
  );
};

export default Bullets;
