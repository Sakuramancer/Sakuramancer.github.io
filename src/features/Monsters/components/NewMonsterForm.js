import { useActionData } from "react-router-dom";
import {
  SmForm,
  SmTextField,
  SmNumberField,
} from "../../../components/UI/Aria";
import classes from "./NewMonsterForm.module.css";

const NewMonsterForm = () => {
  const data = useActionData();

  const abilityProps = { defaultValue: 10, minValue: 0 };
  return (
    <section className={classes.form}>
      <SmForm>
        <SmTextField label="Имя" />
        <SmTextField label="Фракция" />
        <SmNumberField label="СИЛ" {...abilityProps} />
        <SmNumberField label="ЛОВ" {...abilityProps} />
        <SmNumberField label="ТЕЛ" {...abilityProps} />
        <SmNumberField label="МДР" {...abilityProps} />
        <SmNumberField label="ИНТ" {...abilityProps} />
        <SmNumberField label="ХАР" {...abilityProps} />
      </SmForm>
    </section>
  );
};

export default NewMonsterForm;

// id
// faction
// name
// abilities
// skills
// hitpoints
// armor
// initiative
// proficiency
// speed
// speed_extra
// category
// senses
// languages
// languages_extra
// resistances
// resistances_extra
// immunities
// condition_immunities
// features
// actions
// bonus_actions
// reactions

// name
// description
// uses
//   id
//   value
// concentration
