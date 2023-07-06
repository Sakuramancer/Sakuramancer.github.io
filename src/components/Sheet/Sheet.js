import Error from "../UI/Error";
import classes from "./Sheet.module.css";

const Sheet = (props) => {
  const { sheet, asset } = props;
  if (sheet === undefined || asset === undefined) return <Error />;
  return (
    <section className={classes.main}>
      <section className={classes.avatar}>
        <img className={classes.image} src={asset.path} alt={asset.alt} />
        <div className={classes.title}>{sheet.name}</div>
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
        <div className={`${classes.tag} ${classes.hitpoints}`}>
          <span>хиты</span>
          <span className={classes.tag_value}>{sheet.hitpoints}</span>
        </div>
        <div className={`${classes.tag} ${classes.hitdices}`}>
          <span>кости хитов</span>
          <span className={classes.tag_value}>{sheet.hitdices}</span>
        </div>
        <div className={`${classes.tag} ${classes.initiative}`}>
          <span>инициатива</span>
          <span className={classes.tag_value}>{sheet.initiative}</span>
        </div>
        <div className={`${classes.tag} ${classes.armor}`}>
          <span>класс защиты</span>
          <span className={classes.tag_value}>{sheet.armor}</span>
        </div>
        <div className={`${classes.tag} ${classes.proficiency}`}>
          <span>бонус мастерства</span>
          <span className={classes.tag_value}>{sheet.proficiency}</span>
        </div>
        <div className={`${classes.tag} ${classes.speed}`}>
          <span>скорость</span>
          <span className={classes.tag_value}>{sheet.speed}</span>
          <span>ф.</span>
        </div>
        <div className={`${classes.tag} ${classes.size}`}>
          <span>размер</span>
          <span className={classes.tag_value}>{sheet.size}</span>
        </div>
      </section>
      <div className={`${classes.table} ${classes.skills}`}>
        <div className={`${classes.table_header} ${classes.skills}`}>
          владение навыками
        </div>
        {sheet.skills.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item.name}</span>
            <span className={classes.table_item_value}>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.passives}`}>
        <div className={`${classes.table_header} ${classes.passives}`}>
          пассивные навыки
        </div>
        {sheet.passives.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item.name}</span>
            <span className={classes.table_item_value}>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.senses}`}>
        <div className={`${classes.table_header} ${classes.senses}`}>
          чувства
        </div>
        {sheet.senses.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.resistances}`}>
        <div className={`${classes.table_header} ${classes.resistances}`}>
          сопротивления
        </div>
        {sheet.resistances.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.languages}`}>
        <div className={`${classes.table_header} ${classes.languages}`}>
          языки
        </div>
        {sheet.languages.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.tools}`}>
        <div className={`${classes.table_header} ${classes.tools}`}>
          инструменты
        </div>
        {sheet.tools.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.advantages}`}>
        <div className={`${classes.table_header} ${classes.advantages}`}>
          преимущества
        </div>
        {sheet.advantages.map((item, index) => (
          <div key={index} className={classes.table_item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={`${classes.table} ${classes.disadvantages}`}>
        <div className={`${classes.table_header} ${classes.disadvantages}`}>
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
