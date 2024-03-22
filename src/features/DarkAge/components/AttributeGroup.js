import Bullets from "./Bullets";
import classes from "./AttributeGroup.module.css";

const AttributeGroup = ({ title, attributes }) => {
  return (
    <div className={classes.group}>
      <h3>{title}</h3>
      {attributes.map((attr) => (
        <div key={attr.name} className={classes.line}>
          <Bullets max={5} value={attr.value} />
          {attr.expertise && (
            <span className={classes.expertise}>{attr.expertise}</span>
          )}
          <span
            className={`${classes.name} ${
              attr.expertise ? classes.added : ""
            }`.trim()}
          >
            {attr.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AttributeGroup;
