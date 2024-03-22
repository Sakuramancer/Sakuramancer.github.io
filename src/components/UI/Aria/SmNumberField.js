import {
  Button,
  FieldError,
  Group,
  Input,
  Label,
  NumberField,
  Text,
} from "react-aria-components";
import classes from "./SmNumberField.module.css";

const SmNumberField = ({ label, description, errorMessage, ...props }) => {
  return (
    <NumberField className={classes.numberField} {...props}>
      {label && <Label className={classes.label}>{label}</Label>}
      <Group className={classes.group}>
        <Button slot="decrement" className={classes.button}>
          -
        </Button>
        <Input className={classes.input} />
        <Button slot="increment" className={classes.button}>
          +
        </Button>
      </Group>
      {description && (
        <Text slot="description" className={classes.description}>
          {description}
        </Text>
      )}
      {errorMessage && (
        <FieldError className={classes.FieldError}>{errorMessage}</FieldError>
      )}
    </NumberField>
  );
};

export default SmNumberField;
