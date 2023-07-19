import { Fragment } from "react";
import classes from "./UseCheckers.module.css";

const word = (value) => {
  // Assume reasonable value < 20
  if (value === 1) return "использование";
  if (value > 1 && value <= 4) return "использования";
  return "использований";
};

const UseCheckers = ({ value, id, onCheck }) => {
  return (
    <Fragment>
      {[...Array(value).keys()].map((index) => {
        const checked = localStorage.getItem(id) === "true";
        return (
          <input
            type="checkbox"
            key={index}
            id={`${id}_${index}`}
            className={classes.checker}
            onClick={onCheck}
            defaultChecked={checked}
          />
        );
      })}
      <span>{`${value} ${word(value)}`}</span>
    </Fragment>
  );
};

export default UseCheckers;
