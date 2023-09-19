import { useReducer } from "react";
import { SketchPicker } from "react-color";
import Error from "./UI/Error";
import TokenSvg from "./svg/TokenSvg";
import tokenTestMap from "../assets/tokenTestMap.png";
import classes from "./ChangeToken.module.css";

const tokenReducer = (state, action) => {
  if (action.type === "MAIN_COLOR_CHANGE")
    return {
      ...state,
      mainColor: action.color,
    };
  if (action.type === "BACK_COLOR_CHANGE")
    return {
      ...state,
      backColor: action.color,
    };
  return {
    mainColor: "#FFFFFF",
    backColor: "#000000",
    letter: "А",
  };
};

const ChangeToken = ({ sheet, sheetId }) => {
  const defaultToken = {
    mainColor: sheet.token.mainColor,
    backColor: sheet.token.backColor,
    letter: sheet.name[0].toUpperCase(),
  };
  const [tokenState, dispatchToken] = useReducer(tokenReducer, defaultToken);

  if (sheet === undefined || sheetId === undefined) return <Error />;

  const mainColorHandler = (color) => {
    dispatchToken({ type: "MAIN_COLOR_CHANGE", color: color.hex });
  };
  const backColorHandler = (color) => {
    dispatchToken({ type: "BACK_COLOR_CHANGE", color: color.hex });
  };

  const pickerStyles = {
    disableAlpha: {
      picker: { backgroundColor: "#FFFEF5", boxShadow: "none" },
      hue: { height: "24px" },
      color: { height: "24px" },
      Hue: { default: { slider: { height: "50px" } } },
    },
  };

  return (
    <section className={classes.main}>
      <section className={classes.showcase}>
        <div className={classes.pickerBlock}>
          <h1 className={classes.header}>Основной цвет</h1>
          <SketchPicker
            className={classes.picker}
            styles={pickerStyles}
            disableAlpha={true}
            width=""
            color={tokenState.mainColor}
            onChange={mainColorHandler}
          />
        </div>
        <div className={classes.vertical} />
        <div className={classes.pickerBlock}>
          <h1 className={classes.header}>Цвет фона</h1>
          <SketchPicker
            className={classes.picker}
            styles={pickerStyles}
            disableAlpha={true}
            width=""
            color={tokenState.backColor}
            onChange={backColorHandler}
          />
        </div>
        <div className={classes.tokenBlock}>
          <TokenSvg
            className={classes.svg_max}
            mainColor={tokenState.mainColor}
            backColor={tokenState.backColor}
            letter={tokenState.letter}
          />
          <TokenSvg
            className={classes.svg_48}
            mainColor={tokenState.mainColor}
            backColor={tokenState.backColor}
            letter={tokenState.letter}
          />
          <TokenSvg
            className={classes.svg_24}
            mainColor={tokenState.mainColor}
            backColor={tokenState.backColor}
            letter={tokenState.letter}
          />
        </div>
        <div className={classes.tokenTest}>
          <img
            className={classes.tokenTest_map}
            src={tokenTestMap}
            alt="Token Test Map"
          />
          <TokenSvg
            className={classes.tokenTest_svg}
            mainColor={tokenState.mainColor}
            backColor={tokenState.backColor}
            letter={tokenState.letter}
          />
        </div>
      </section>
    </section>
  );
};

export default ChangeToken;
