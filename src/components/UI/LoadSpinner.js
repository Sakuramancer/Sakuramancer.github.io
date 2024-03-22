import classes from "./LoadSpinner.module.css";

const LoadSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner} />
    </div>
  );
};

export default LoadSpinner;
