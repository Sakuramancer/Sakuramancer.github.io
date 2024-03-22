import { SmCheckbox } from "../../../components/UI/Aria";
import classes from "./Checkers.module.css";

const Checkers = ({ max, value = 0 }) => {
  const onCheck = () => {};
  return (
    <span className={classes.checkers}>
      {[...Array(max).keys()].map((el) => {
        const checked = el < value ? classes.active : "";
        return (
          <SmCheckbox
            key={el}
            id={el}
            onClick={onCheck}
            defaultChecked={checked}
          />
        );
      })}
    </span>
  );
};

export default Checkers;
