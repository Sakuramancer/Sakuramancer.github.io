import { Fragment } from "react";
import classes from "./Sheet.module.css"
import andrakasImage from "../../assets/characters/Andrakas h300.png";

const sheet = {
  name: "Андракас",
  classes: [
    {
      name: "Воин",
      value: 7,
      style: {backgroundColor: "#8D6E63"}
    },
    {
      name: "Колдун",
      value: 3,
      style: {backgroundColor: "#AB47BC"}
    },
  ],
  abilities: [
    {
      abbr: "СИЛ",
      value: 13,
      mod: "+1"
    },
    {
      abbr: "ЛОВ",
      value: 18,
      mod: "+4"
    },
    {
      abbr: "ТЕЛ",
      value: 14,
      mod: "+2"
    },
    {
      abbr: "ИНТ",
      value: 8,
      mod: "-1"
    },
    {
      abbr: "МДР",
      value: 11,
      mod: "+0"
    },
    {
      abbr: "ХАР",
      value: 14,
      mod: "+2"
    },
  ],
  skills: [
    "Атлетика",
    "Скрытность",
    "Внимательность",
    "Проницательность",
    "Уход за животными",
  ],
  hitpoints: 81,
  hitdices: "7d10 + 3d8",
  armor: 18,
  initiative: "+4",
  proficiency: "+4",
  speed: 25,
  size: "Маленький",
  passives: [
    {
      name: "Анализ",
      value: 9,
    },
    {
      name: "Внимательность",
      value: 14,
    },
    {
      name: "Проницательность",
      value: 14,
    },
  ],
  languages: [
    "Общий", "Полуросликов", "Гоблинский"
  ],
  tools: [
    "Кузнец", "Алхимик", "Верховая езда"
  ],
  senses: [
    "Темное зрение 120 ф."
  ],
  resistanses: [
    "Яд"
  ],
  advantages : [
    "против испуга",
    "против яда",
  ],
  disadvantages: [
    "Скрытность в доспехах"
  ]
}

const Sheet = (props) => {
  return (
    <Fragment>
      <section className={classes.avatar}>
        <img className={classes.image}
          src={andrakasImage}
          alt={"D&D Halfling Fighter/Rogue/Bearstander by Brendon Chang @bchangart"}
        />
        <div className={classes.title}>{sheet.name}</div>
      </section>
      <section className={classes.classList}>
        {sheet.classes.map((item, index) => (
          <div key={index}
            className={classes.class}
            style={item.style}
          >
            <span className={classes.class_name}>{item.name}</span>
            <span className={classes.class_value}>{item.value}</span>
          </div>
        ))}
      </section>
      <section className={classes.abilities}>
        {sheet.abilities.map((item, index) => (
          <div key={index} className={classes.ability}>
            <div className={classes.ability_abbr}>{item.abbr}</div>
            <div className={classes.ability_value}>{item.value}</div>
            <div className={classes.ability_mod}>{item.mod}</div>
          </div>
        ))}
      </section>
      <div className={[classes.tag, classes.hitpoints].join(" ")}>
        <span>хиты</span>
        <span className={classes.tag_value}>{sheet.hitpoints}</span>
      </div>
      <div className={[classes.tag, classes.hitdices].join(" ")}>
        <span>кости хитов</span>
        <span className={classes.tag_value}>{sheet.hitdices}</span>
      </div>
      <div className={[classes.tag, classes.initiative].join(" ")}>
        <span>инициатива</span>
        <span className={classes.tag_value}>{sheet.initiative}</span>
        </div>
      <div className={[classes.tag, classes.armor].join(" ")}>
        <span>класс защиты</span>
        <span className={classes.tag_value}>{sheet.armor}</span>
        </div>
      <div className={[classes.tag, classes.proficiency].join(" ")}>
        <span>бонус мастерства</span>
        <span className={classes.tag_value}>{sheet.proficiency}</span>
      </div>
      <div className={[classes.tag, classes.speed].join(" ")}>
        <span>скорость</span>
        <span className={classes.tag_value}>{sheet.speed}</span>
        <span>ф.</span>
      </div>
      <div className={[classes.tag, classes.size].join(" ")}>
        <span>размер</span>
        <span className={classes.tag_value}>{sheet.size}</span>
      </div>
      <div className={classes.skills}>Владение навыками:
        {sheet.skills.join(", ")}
      </div>
      <div className={classes.passives}>Пассивные
        {sheet.passives.map((item, index) => (
          <div key={index} className={classes.passive}>
            <div className={classes.passive_name}>{item.name}</div>
            <div className={classes.passive_value}>{item.value}</div>
          </div>
        ))}
      </div>
      <div className={classes.languages}>Языки:
        {sheet.languages.join(", ")}
      </div>
      <div className={classes.tools}>Инструменты и умения:
        {sheet.tools.join(", ")}
      </div>
      <div className={classes.advantages}>Преимущества:
        {sheet.advantages.join(", ")}
      </div>
      <div className={classes.disadvantages}>Помехи:
        {sheet.disadvantages.join(", ")}
      </div>
      <div className={classes.resistanses}>Сопротивления к урону:
        {sheet.resistanses.join(", ")}
      </div>
    </Fragment>
  );
}

export default Sheet;
