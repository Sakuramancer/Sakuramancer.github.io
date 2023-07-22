import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Error from "../UI/Error";
import classes from "./Monster.module.css";
import UseCheckers from "./UseCheckers";
import NavigationPanel from "../Layout/NavigationPanel";
import { Fragment, useState } from "react";

const links = [
  {
    link: "#actions",
    src: "Д",
    tooltip: "Действия",
  },
  {
    link: "#bonus_actions",
    src: "БД",
    tooltip: "Бонусные действия",
  },
  {
    link: "#reactions",
    src: "Р",
    tooltip: "Реакции",
  },
];

const initCheckers = (monster) => {
  if (monster === undefined) return undefined;
  const checkers = {};
  [monster.actions, monster.bonus_actions, monster.reactions].forEach(
    (list) => {
      if (!list) return;
      list.forEach((item) => {
        if (item.uses) checkers[item.uses.id] = 0;
      });
    }
  );
  return checkers;
};
const Monster = (props) => {
  const { monster, asset } = props;
  let defaultCheckers = initCheckers(monster);
  const storageCheckers = JSON.parse(localStorage.getItem(monster.id));
  if (storageCheckers) defaultCheckers = storageCheckers;

  const [checkers, setCheckers] = useState(defaultCheckers);

  if (monster === undefined || asset === undefined) return <Error />;

  const checkboxHandler = (event) => {
    const [id, strIndex] = event.target.id.split("__");
    const index = parseInt(strIndex);
    const xorBit = 2 ** index;
    setCheckers((dict) => {
      dict[id] = dict[id] ^ xorBit
      localStorage.setItem(monster.id, JSON.stringify(dict));
      return dict;
    });
  };

  return (
    <Fragment>
      <section id="top" className={classes.main}>
        <section className={classes.avatar}>
          <img className={classes.image} src={asset.path} alt={asset.alt} />
          <div className={classes.title}>{monster.name}</div>
        </section>
        <section className={classes.section}>
          <p>
            <em>{monster.category}</em>
          </p>
          <p>
            <strong>Класс Доспеха</strong> {monster.armor}
          </p>
          <p>
            <strong>Хиты</strong> {monster.hitpoints}
          </p>
          <p>
            <strong>Скорость</strong> {monster.speed} ф.
          </p>
        </section>
        <section className={classes.abilities}>
          {monster.abilities.map((item, index) => (
            <div key={index} className={classes.ability}>
              <div className={classes.ability_abbr}>{item.abbr}</div>
              <div className={classes.ability_value}>{item.value}</div>
              <div className={classes.ability_mod}>
                <div className={classes.ability_mark}>м.</div>
                {item.mod}
              </div>
              <div className={classes.ability_save}>
                <div className={classes.ability_mark}>сп</div>
                {item.save}
              </div>
            </div>
          ))}
        </section>
        <section className={classes.section}>
          {monster.initiative && (
            <p>
              <strong>Инициатива</strong> {monster.initiative}
            </p>
          )}
          {monster.skills && (
            <p>
              <strong>Навыки</strong>{" "}
              {monster.skills
                .map((item) => `${item.name} ${item.value}`)
                .join(", ")}
            </p>
          )}
          {monster.resistances && (
            <p>
              <strong>Сопротивление к урону</strong>{" "}
              {monster.resistances.join(", ")}
            </p>
          )}
          {monster.immunities && (
            <p>
              <strong>Иммунитет к урону</strong> {monster.immunities.join(", ")}
            </p>
          )}
          {monster.condition_immunities && (
            <p>
              <strong>Иммунитет к состоянию</strong>{" "}
              {monster.condition_immunities.join(", ")}
            </p>
          )}
          {monster.senses && (
            <p>
              <strong>Чувства</strong> {monster.senses.join(", ")}
            </p>
          )}
          {monster.languages && (
            <p>
              <strong>Языки</strong> {monster.languages.join(", ")}
              {monster.languages_extra &&
                monster.languages_extra.length > 0 &&
                `; ${monster.languages_extra.join(", ")}`}
            </p>
          )}
          {monster.proficiency && (
            <p>
              <strong>Бонус мастерства</strong> {monster.proficiency}
            </p>
          )}
        </section>
        <div className={classes.line} />
        {monster.features && monster.features.length > 0 && (
          <section className={classes.section}>
            {monster.features.map((item, index) => (
              <ReactMarkdown key={index}>{item}</ReactMarkdown>
            ))}
          </section>
        )}
        {monster.actions && monster.actions.length > 0 && (
          <section id="actions" className={classes.section}>
            <h3>Действия</h3>
            {monster.actions.map((item, index) => (
              <div key={index} className={classes.block}>
                {item.name && (
                  <p className={classes.feature_title}>{item.name}</p>
                )}
                {item.uses && (
                  <p className={classes.feature_uses}>
                    <UseCheckers
                      checkers={checkers}
                      value={item.uses.value}
                      id={item.uses.id}
                      onCheck={checkboxHandler}
                    />
                    {item.concentration && <span>{item.concentration}</span>}
                  </p>
                )}
                {item.description.map((line, index) => (
                  <ReactMarkdown key={index}>{line}</ReactMarkdown>
                ))}
              </div>
            ))}
          </section>
        )}
        {monster.bonus_actions && monster.bonus_actions.length > 0 && (
          <section id="bonus_actions" className={classes.section}>
            <h3>Бонусные действия</h3>
            {monster.bonus_actions.map((item, index) => (
              <div key={index} className={classes.block}>
                {item.name && (
                  <p className={classes.feature_title}>{item.name}</p>
                )}
                {item.uses && (
                  <p className={classes.feature_uses}>
                    <UseCheckers
                      checkers={checkers}
                      value={item.uses.value}
                      id={item.uses.id}
                      onCheck={checkboxHandler}
                    />
                    {item.concentration && <span>{item.concentration}</span>}
                  </p>
                )}
                {item.description.map((line, index) => (
                  <ReactMarkdown key={index}>{line}</ReactMarkdown>
                ))}
              </div>
            ))}
          </section>
        )}
        {monster.reactions && monster.reactions.length > 0 && (
          <section id="reactions" className={classes.section}>
            <h3>Реакции</h3>
            {monster.reactions.map((item, index) => (
              <div key={index} className={classes.block}>
                {item.name && (
                  <p className={classes.feature_title}>{item.name}</p>
                )}
                {item.uses && (
                  <p className={classes.feature_uses}>
                    <UseCheckers
                      checkers={checkers}
                      value={item.uses.value}
                      id={item.uses.id}
                      onCheck={checkboxHandler}
                    />
                    {item.concentration && <span>{item.concentration}</span>}
                  </p>
                )}
                {item.description.map((line, index) => (
                  <ReactMarkdown key={index}>{line}</ReactMarkdown>
                ))}
              </div>
            ))}
          </section>
        )}
      </section>
      <NavigationPanel links={links} />
    </Fragment>
  );
};

export default Monster;
