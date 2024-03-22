import { HashLink } from "react-router-hash-link";
import { Tooltip } from "../../UI";
import { TokenSvg } from "../../svg";
import classes from "./NavigationToken.module.css";

const NavigationToken = ({ item }) => {
  return (
    <Tooltip label={item.name}>
      <HashLink smooth to={item.link} className={classes.link}>
        <div className={classes.token}>
          <TokenSvg
            size="36px"
            mainColor={item.mainColor}
            backColor={item.backColor}
            letter={item.name}
          />
        </div>
      </HashLink>
    </Tooltip>
  );
};

export default NavigationToken;
