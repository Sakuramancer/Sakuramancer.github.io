import { useLoaderData } from "react-router-dom";
import Avatar from "../../../components/Avatar/Avatar";
import { characterAssets } from "../assets/Assets";
import classes from "./CharacterList.module.css";

const CharacterList = () => {
  const characters = useLoaderData();
  return (
    <section className={classes.characters}>
      <ul>
        {Object.entries(characters).map(([key, item]) => (
          <Avatar
            key={key}
            id={item.id}
            path={"/characters"}
            title={item.name}
            img={characterAssets[item.id].path}
            alt={characterAssets[item.id].alt}
          />
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;

export async function loader() {
  return await fetch(
    "https://evenglen-campaign-default-rtdb.europe-west1.firebasedatabase.app/characters.json"
  );
}
