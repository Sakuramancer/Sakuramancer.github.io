import { HashLink } from "react-router-hash-link";
import { Tooltip } from "../../UI";
import classes from "./NavigationLink.module.css";

const NavigationLink = ({ item }) => {
  return (
    <Tooltip label={item.tooltip}>
      <HashLink smooth to={item.link} className={classes.link}>
        <div className={classes.button}>
          <span className={classes.letter}>{item.src}</span>
        </div>
      </HashLink>
    </Tooltip>
  );
};

export default NavigationLink;
