import { Error } from "../../../components/UI";

import AttributeSections from "./AttributeSections";
import Profile from "./Profile";
import Bullets from "./Bullets";
import Checkers from "./Checkers";
import characters from "../data/characters.json";
import { characterAssets } from "../assets";

import classes from "./Sheet.module.css";

const Sheet = ({ sheetId }) => {
  const sheet = characters[sheetId];
  const asset = characterAssets[sheetId];

  if (sheet === undefined || asset === undefined) return <Error />;

  return (
    <section className={classes.main}>
      <section className={classes.avatar}>
        <img className={classes.image} src={asset.path} alt={asset.alt} />
        <div className={classes.name}>{sheet.name}</div>
      </section>
      <section className={classes.sheet}>
        <Profile sheet={sheet} />
        {/* <section className={classes.attributes}>
          <h2>Дорога</h2>
          <div className={classes.profileLine}>
            <Bullets max={10} value={sheet.road.value} />
            <span className={classes.profileLine_value}>{sheet.road.name}</span>
          </div>
          <div className={classes.profileLine}>
            <span className={classes.profileLine_name}>Аура</span>
            <span className={classes.profileLine_value}>
              {`${sheet.road.aura.name} +${sheet.road.aura.modifier}`}
            </span>
          </div>
          <div className={classes.profileLine}>
            <Checkers max={12} />
            <span className={classes.profileLine_name}>Запас крови</span>
          </div>
          <div className={classes.profileLine}>
            <Bullets max={10} value={sheet.willpower.value} />
            <span className={classes.profileLine_name}>Воля</span>
          </div>
        </section>
        <section className={classes.attributes}>
          <h2>Статус</h2>
          <div className={classes.profile_group}>
            <div className={classes.profileLine}>
              <span className={classes.profileLine_name}>Инициатива</span>
              <span className={classes.profileLine_value}>
                {`1d10 + ${sheet.initiative}`}
              </span>
            </div>
            <div className={classes.profileLine}>
              <span className={classes.profileLine_name}>Здоровье</span>
              <span className={classes.profileLine_value}>{}</span>
            </div>
            <div className={classes.profileLine}>
              <span className={classes.profileLine_name}>Изъян</span>
              <span className={classes.profileLine_value}>{}</span>
            </div>
            <div className={classes.profileLine}>
              <span className={classes.profileLine_name}>Опыт</span>
              <span className={classes.profileLine_value}>{}</span>
            </div>
          </div>
        </section> */}
        <AttributeSections sheet={sheet} />
      </section>
    </section>
  );
};

export default Sheet;
