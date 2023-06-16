import Character from "./Character";
import classes from "./Characters.module.css";

import andrakasImage from "../../assets/characters/Andrakas h300.png";
import placeholderImage from "../../assets/characters/Placeholder h300.png";
import selenaImage from "../../assets/characters/Selena h300.png";
import undaaratelImage from "../../assets/characters/Unda'aratel h300.png";

const Characters = (props) => {
  const items = [
    {
      src: andrakasImage,
      title: "Андракас",
      alt: "D&D Halfling Fighter/Rogue/Bearstander by Brendon Chang @bchangart"
    },
    {
      src: placeholderImage,
      title: "Талисин",
      alt: "The Last Spark by Eleonor Piteira @eleonorpiteira"
    },
    {
      src: placeholderImage,
      title: "Эфеламон",
      alt: "The Last Spark by Eleonor Piteira @eleonorpiteira"
    },
    {
      src: selenaImage,
      title: "Селена",
      alt: "Enchantress by Lauren Walsh @laurenwalshart"
    },
    {
      src: undaaratelImage,
      title: "Унда'аратель",
      alt: "Shadar-Kai Scythemage by SirHancelot"
    },
  ]
  
  return (
    <section className={classes.characters}>
      <ul>
      {items.map((item, index) => (
        <Character
          key={index}
          id={index}
          title={item.title}
          img={item.src}
          alt={item.alt}
        />
      ))}
      </ul>
    </section>
  );
};

export default Characters;
