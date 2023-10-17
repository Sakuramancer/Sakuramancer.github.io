import classes from "./BloodwoodMap.module.css";
import ObeliskSvg from "./svg/ObeliskSvg";
import MarkSvg from "./svg/MarkSvg";
import GridSvg from "./svg/GridSvg";
import { useState } from "react";

const BloodwoodMap = (props) => {
  const [showGrid, setShowGrid] = useState(true);

  const showGridHandler = () => {
    setShowGrid((value) => !value);
  };

  return (
    <section className={classes.main}>
      <div className={classes.background} />
      {/* <ObeliskSvg className={classes.obelisk1} />
      <ObeliskSvg className={classes.obelisk2} /> */}
      <MarkSvg
        className={[classes.mark, classes.mark_sangueia].join(" ")}
        letter={"З"}
      />
      <MarkSvg
        className={[classes.mark, classes.mark_alseids].join(" ")}
        letter={"А"}
      />
      <MarkSvg
        className={[classes.mark, classes.mark_avonleigh].join(" ")}
        letter={"Д"}
      />
      <MarkSvg
        className={[classes.mark, classes.mark_bargest].join(" ")}
        letter={"К"}
      />
      <MarkSvg
        className={[classes.mark, classes.mark_camp].join(" ")}
        letter={"Л"}
      />
      {showGrid && (
        <GridSvg className={classes.grid} factor={0.5} x={10} y={10} />
      )}
      <input
        type="checkbox"
        id="showGrid"
        className={classes.checker}
        onClick={showGridHandler}
        defaultChecked={showGrid}
      />
      <label htmlFor="showGrid">Показать/скрыть сетку</label>
    </section>
  );
};

export default BloodwoodMap;
