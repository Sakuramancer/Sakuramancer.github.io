import classes from "./MarkSvg.module.css";

const MarkSvg = ({ className, letter }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        className={classes.text}
        x="25"
        y="40"
        textAnchor="middle"
      >
        {letter}
      </text>
      <path d="M10,25
        a 24,14 0 1 0 30,0
        a 23,13 0 1 1 -30,0
        z
      " />
    </svg>
  );
};

export default MarkSvg;
