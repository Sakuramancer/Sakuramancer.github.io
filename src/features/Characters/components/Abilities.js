import classes from "./Abilities.module.css";

const Abilities = ({ sheet }) => {
  return (
    <section className={classes.abilities}>
      {sheet.abilities.map((item, index) => (
        <div key={index} className={classes.ability}>
          <div className={classes.abbr}>{item.abbr}</div>
          <div className={classes.value}>{item.value}</div>
          <div className={classes.mod}>
            <div className={classes.mark}>м.</div>
            {item.mod}
          </div>
          <div className={classes.save}>
            <div className={classes.mark}>сп</div>
            {item.save}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Abilities;
