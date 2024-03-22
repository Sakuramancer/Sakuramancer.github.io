import classes from "./UsedCheckers.module.css";

const word = (value) => {
  // Assume reasonable value < 20
  if (value === 1) return "использование";
  if (value > 1 && value <= 4) return "использования";
  return "использований";
};

const UsedCheckers = ({ checkers, value, id, onCheck }) => {
  return (
    <>
      {[...Array(value).keys()].map((index) => {
        const andBit = 2 ** index;
        const checked = (checkers[id] & andBit) === andBit;
        return (
          <input
            type="checkbox"
            key={index}
            id={`${id}__${index}`}
            className={classes.checker}
            onClick={onCheck}
            defaultChecked={checked}
          />
        );
      })}
      <span>{`${value} ${word(value)}`}</span>
    </>
  );
};

export default UsedCheckers;
