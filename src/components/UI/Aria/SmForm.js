import { Button, Form, Group } from "react-aria-components";
import classes from "./SmForm.module.css";

const SmForm = ({ resetLabel, submitLabel, ...props }) => {
  if (resetLabel === undefined) resetLabel = "Отмена";
  if (submitLabel === undefined) submitLabel = "Сохранить";

  return (
    <Form className={classes.form} {...props}>
      {props.children}
      <Group className={classes.actions}>
        <Button type="reset">{resetLabel}</Button>
        <Button type="submit">{submitLabel}</Button>
      </Group>
    </Form>
  );
};

export default SmForm;
