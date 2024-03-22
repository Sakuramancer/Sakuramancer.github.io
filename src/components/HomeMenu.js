import PassKeyLink from "./PassKeyLink";
import logo from "../assets/logo.png";

import classes from "./HomeMenu.module.css";

const HomeMenu = () => {
  return (
    <div className={classes.total}>
      <div className={classes.logo}>
        <img
          className={classes.image}
          style={{ width: "120px" }}
          src={logo}
          alt="sakuramancer"
        />
        <h1>Sakuramancer</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.menu}>
          <PassKeyLink schemeId="kie" />
          <PassKeyLink schemeId="darkAge" />
        </div>
        <span className={classes.attribution}>樱花 by 画画的summer</span>
      </div>
    </div>
  );
};

export default HomeMenu;
