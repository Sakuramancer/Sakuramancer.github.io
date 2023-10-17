import { Fragment } from "react";
import classes from "./TokenSvg.module.css";

const TokenSvg = ({
  className,
  mainColor,
  backColor,
  border,
  letter,
  checked,
}) => {
  if (border === undefined) border = true;
  if (checked === undefined) checked = false;
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill={border ? mainColor : backColor} cx="24" cy="24" r="24" />
      {border && <circle fill={backColor} cx="24" cy="24" r="21" />}
      <text
        className={classes.text}
        fill={mainColor}
        x="24"
        y="37"
        textAnchor="middle"
      >
        {letter[0].toUpperCase()}
      </text>
      {checked && (
        <Fragment>
          <circle fill="#25A864" cx="38" cy="38" r="10" />
          <path
            fill="#ffffff"
            d="M34,39
              a 1,1 0 0 0 -2,2
              l 3 3
              a 1.414 1.414 0 0 0 2,0
              l 7 -7
              a 1,1 0 0 0 -2,-2
              l -6 6
              z"
          />
        </Fragment>
      )}
    </svg>
  );
};

export default TokenSvg;
