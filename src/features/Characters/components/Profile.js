import classes from "./Profile.module.css";

const tagClass = (val) => [classes.tag, val].join(" ");

const Profile = ({ sheet }) => {
  return (
    <section className={classes.profile}>
      <div>
        <span className={tagClass(classes.hitpoints)} />
        <span>хиты</span>
        <span className={classes.value}>{sheet.hitpoints}</span>
      </div>
      <div>
        <span className={tagClass(classes.hitdices)} />
        <span>кости хитов</span>
        <span className={classes.value}>{sheet.hitdices}</span>
      </div>
      <div>
        <span className={tagClass(classes.initiative)} />
        <span>инициатива</span>
        <span className={classes.value}>{sheet.initiative}</span>
      </div>
      <div>
        <span className={tagClass(classes.armor)} />
        <span>класс доспеха</span>
        <span className={classes.value}>{sheet.armor}</span>
      </div>
      <div>
        <span className={tagClass(classes.proficiency)} />
        <span>бонус мастерства</span>
        <span className={classes.value}>{sheet.proficiency}</span>
      </div>
      <div>
        <span className={tagClass(classes.speed)} />
        <span>скорость</span>
        <span className={classes.value}>{`${sheet.speed} ф.`}</span>
      </div>
      <div>
        <span className={tagClass(classes.size)} />
        <span>размер</span>
        <span className={classes.value}>{sheet.size}</span>
      </div>
    </section>
  );
};

export default Profile;
