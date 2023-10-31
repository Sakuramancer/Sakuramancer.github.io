import { Link } from "react-router-dom";
import Error from "../../../components/UI/Error";
import TokenSvg from "../../../components/svg/TokenSvg";
import { useStorage } from "../../../hooks/useStorage";
import sheets from "../data/sheets.json";
import { characterAssets } from "../assets/Assets";
import classes from "./Sheet.module.css";

const tagClass = (val) => [classes.tag, val].join(" ");

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
          to={`/changeToken?sheet=${sheetId}`}
        >
          Изменить
        </Link>
      </section>
      <section className={classes.classList}>
        {sheet.classes.map((item, index) => (
          <div key={index} className={classes.class} style={item.style}>
            <span className={classes.class_name}>{item.name}</span>
            <span className={classes.class_value}>{item.value}</span>
            {item.archetype?.length && (
              <span className={classes.class_archetype}>{item.archetype}</span>
            )}
          </div>
        ))}
      </section>
      <section className={classes.abilities}>
        {sheet.abilities.map((item, index) => (
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
      <section>
        <div className={tagClass(classes.hitpoints)}>
          <span>хиты</span>
          <span className={classes.tag_value}>{sheet.hitpoints}</span>
        </div>
        <div className={tagClass(classes.hitdices)}>
          <span>кости хитов</span>
          <span className={classes.tag_value}>{sheet.hitdices}</span>
        </div>
        <div className={tagClass(classes.initiative)}>
          <span>инициатива</span>
          <span className={classes.tag_value}>{sheet.initiative}</span>
        </div>
        <div className={tagClass(classes.armor)}>
          <span>класс доспеха</span>
          <span className={classes.tag_value}>{sheet.armor}</span>
        </div>
        <div className={tagClass(classes.proficiency)}>
          <span>бонус мастерства</span>
          <span className={classes.tag_value}>{sheet.proficiency}</span>
        </div>
        <div className={tagClass(classes.speed)}>
          <span>скорость</span>
          <span className={classes.tag_value}>{sheet.speed}</span>
          <span>ф.</span>
        </div>
        <div className={tagClass(classes.size)}>
          <span>размер</span>
          <span className={classes.tag_value}>{sheet.size}</span>
        </div>
      </section>
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
