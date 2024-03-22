import { Checkbox } from "react-aria-components";
import classes from "./SmCheckbox.module.css";

const SmCheckbox = ({ children }) => {
  return (
    <Checkbox>
      <div className={classes.checkbox}>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </Checkbox>
  );
};

export default SmCheckbox;
