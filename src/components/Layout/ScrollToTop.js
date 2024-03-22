import { UpArrowSvg } from "../svg";
import { useScrollToTop } from "../../hooks";
import classes from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [showButton, scrollMethod] = useScrollToTop({ behavior: "smooth" });

  if (showButton) {
    return (
      <div onClick={scrollMethod} className={classes.container}>
        <UpArrowSvg className={classes.svg} />
      </div>
    );
  }
  return <></>;
};

export default ScrollToTop;
