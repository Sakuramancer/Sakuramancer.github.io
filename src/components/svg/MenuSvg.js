import classes from "./MenuSvg.module.css";

const MenuSvg = ({ size = "32px", className }) => {
  return (
    <svg
      style={{ height: size, width: size }}
      className={[classes.svg, className].join(" ")}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 4,10 h 24
          M 4,18 h 24
          M 4,26 h 24"
      />
    </svg>
  );
};

export default MenuSvg;
