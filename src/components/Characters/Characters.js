import Character from "./Character";
import classes from "./Characters.module.css";
import { assets } from "../UI/Assets"

const Characters = (props) => {
  const items = [
    {
      id: "andrakas",
      title: "Андракас",
    },
    {
      id: "talisin",
      title: "Талисин",
    },
    {
      id: "efelamon",
      title: "Эфеламон",
    },
    {
      id: "selena",
      title: "Селена",
    },
    {
      id: "undaaratel",
      title: "Унда'аратель",
    },
  ]
  
  return (
    <section className={classes.characters}>
      <ul>
      {items.map((item, index) => (
        <Character
          key={index}
          id={item.id}
          title={item.title}
          img={assets[item.id].path}
          alt={assets[item.id].alt}
        />
      ))}
      </ul>
    </section>
  );
};

export default Characters;
