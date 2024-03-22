import { Link, createSearchParams } from "react-router-dom";
import { Error } from "../../../components/UI";
import { TokenSvg } from "../../../components/svg";
import { useStorage } from "../../../hooks";
import { characterAssets } from "../assets";
import Abilities from "./Abilities";
import Profile from "./Profile";
import sheets from "../data/sheets.json";

import classes from "./Sheet.module.css";

const Sheet = ({ sheetId }) => {
  const [storage, dispatch] = useStorage();
  const checked = storage.navTokens[sheetId] !== undefined;

  const sheet = sheets[sheetId];
  const asset = characterAssets[sheetId];
  if (sheet === undefined || asset === undefined) return <Error />;

  const tokenHandler = () => {
    dispatch("TOGGLE_NAV_TOKEN", {
      id: sheetId,
      mainColor: sheet.token.mainColor,
      backColor: sheet.token.backColor,
      name: sheet.name,
    });
  };

  return (
    <section className={classes.main}>
      <section className={classes.avatar}>
        <img className={classes.image} src={asset.path} alt={asset.alt} />
        <div className={classes.title}>{sheet.name}</div>
      </section>
      <section className={classes.token}>
        <TokenSvg
          size="32px"
          className={classes.token_svg}
          mainColor={sheet.token.mainColor}
          backColor={sheet.token.backColor}
          letter={sheet.name}
          checked={checked}
        />
        <button
          type="button"
          className={classes.token_button}
          onClick={tokenHandler}
        >
          {checked ? "Открепить" : "Закрепить"}
        </button>
        <Link
          className={classes.token_link}
          to={[
            "/kie/changeToken",
            createSearchParams({
              sheet: sheetId,
              mainColor: sheet.token.mainColor,
              backColor: sheet.token.backColor,
              letter: sheet.name[0],
            }).toString(),
          ].join("?")}
        >
          Изменить
        </Link>
      </section>
      <section className={classes.classList}>
        {sheet.classes.map((item, index) => (
          <div key={index} className={classes.class} style={item.style}>
            <span
              className={classes.class_name}
            >{`${item.name} ${item.value}`}</span>
            {item.archetype?.length && (
              <span className={classes.class_archetype}>{item.archetype}</span>
            )}
          </div>
        ))}
      </section>
      <Abilities sheet={sheet} />
      <Profile sheet={sheet} />
      <div className={[classes.table, classes.skills].join(" ")}>
        <div className={[classes.table_header, classes.skills].join(" ")}>
          владение навыками
        </div>
        {sheet.skills.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item.name}</span>
            <span className={classes.table_item_value}>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.passives].join(" ")}>
        <div className={[classes.table_header, classes.passives].join(" ")}>
          пассивные навыки
        </div>
        {sheet.passives.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item.name}</span>
            <span className={classes.table_item_value}>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.senses].join(" ")}>
        <div className={[classes.table_header, classes.senses].join(" ")}>
          чувства
        </div>
        {sheet.senses.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.resistances].join(" ")}>
        <div className={[classes.table_header, classes.resistances].join(" ")}>
          сопротивления
        </div>
        {sheet.resistances.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.languages].join(" ")}>
        <div className={[classes.table_header, classes.languages].join(" ")}>
          языки
        </div>
        {sheet.languages.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.tools].join(" ")}>
        <div className={[classes.table_header, classes.tools].join(" ")}>
          инструменты
        </div>
        {sheet.tools.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.advantages].join(" ")}>
        <div className={[classes.table_header, classes.advantages].join(" ")}>
          преимущества
        </div>
        {sheet.advantages.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={[classes.table, classes.disadvantages].join(" ")}>
        <div
          className={[classes.table_header, classes.disadvantages].join(" ")}
        >
          помехи
        </div>
        {sheet.disadvantages.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sheet;
