import classes from "./Tooltip.module.css";

const Tooltip = ({ children, label, visible=true }) => {
  return (
    <div className={classes.tooltip}>
      {children}
      {visible && <span className={classes.label}>{label}</span>};
    </div>
  );
};

export default Tooltip;
