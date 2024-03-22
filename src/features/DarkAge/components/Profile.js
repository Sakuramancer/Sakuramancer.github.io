import { useMemo } from "react";
import classes from "./Profile.module.css";

const profileMap = (sheet) => [
  {
    key: "fullName",
    name: "Имя",
    value: sheet.fullName,
  },
  {
    key: "player",
    name: "Игрок",
    value: sheet.player,
  },
  {
    key: "age",
    name: "Возраст",
    value: sheet.age,
  },
  {
    key: "gender",
    name: "Пол",
    value: sheet.gender,
  },
  {
    key: "nature",
    name: "Натура",
    value: sheet.nature,
  },
  {
    key: "demeanor",
    name: "Маска",
    value: sheet.demeanor,
  },
  {
    key: "concept",
    name: "Амплуа",
    value: sheet.concept,
  },
  {
    key: "clanName",
    name: "Клан",
    value: sheet.clanName,
  },
  {
    key: "generation",
    name: "Поколение",
    value: `${sheet.generation}-е`,
  },
  {
    key: "sire",
    name: "Сир",
    value: sheet.sire,
  },
];

const Profile = ({ sheet }) => {
  const groups = useMemo(() => {
    const profile = profileMap(sheet);
    return [profile.slice(0, 5), profile.slice(5)];
  }, [sheet]);

  return (
    <section className={classes.profile}>
      <h2>Профиль</h2>
      {groups.map((group, idx) => (
        <div key={idx} className={classes.group}>
          {group.map((line, idx) => (
            <div key={idx} className={classes.line}>
              <span className={classes.name}>{line.name}</span>
              <span className={classes.value}>{line.value}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Profile;
