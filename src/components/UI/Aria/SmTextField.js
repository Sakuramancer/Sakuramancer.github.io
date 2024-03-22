import {
  FieldError,
  Input,
  Label,
  Text,
  TextField,
} from "react-aria-components";
import classes from "./SmTextField.module.css";

const SmTextField = ({ label, description, errorMessage, ...props }) => {
  return (
    <TextField className={classes.textField} {...props}>
      {label && <Label className={classes.label}>{label}</Label>}
      <Input className={classes.input} />
      {description && (
        <Text slot="description" className={classes.description}>
          {description}
        </Text>
      )}
      {errorMessage && (
        <FieldError className={classes.FieldError}>{errorMessage}</FieldError>
      )}
    </TextField>
  );
};

export default SmTextField;
