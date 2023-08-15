import UpArrowSvg from "../svg/UpArrowSvg";
import { scrollToTopSmooth } from "../../hooks/useScrollToTop";
import classes from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  return (
    <div onClick={scrollToTopSmooth} className={classes.container}>
      <UpArrowSvg className={classes.svg} />
    </div>
  );
};

export default ScrollToTop;
