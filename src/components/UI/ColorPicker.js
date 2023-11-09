import { SketchPicker } from "react-color";
import classes from "./ColorPicker.module.css";

const pickerStyles = {
  disableAlpha: {
    picker: { backgroundColor: "#FFFEF5", boxShadow: "none" },
    hue: { height: "24px" },
    color: { height: "24px" },
    Hue: { default: { slider: { height: "50px" } } },
  },
};
const ColorPicker = ({ color, onChange }) => {
  return (
    <SketchPicker
      className={classes.picker}
      styles={pickerStyles}
      disableAlpha={true}
      width=""
      color={color}
      onChange={onChange}
    />
  );
};

export default ColorPicker;
