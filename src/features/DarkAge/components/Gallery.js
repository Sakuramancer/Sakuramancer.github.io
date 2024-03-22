import { Link } from "react-router-dom";
import { characterAssets } from "../assets";
import characters from "../data/characters.json";

import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={classes.main}>
      {Object.values(characters).map((char) => {
        const { path, alt } = characterAssets[char.id];
        return (
          <Link key={char.id} to={char.id}>
            <div className={classes.char}>
              <div className={classes.image}>
                <img src={path} alt={alt} />
              </div>
              <div className={classes.right}>
                <div className={classes.top}>
                  <div className={classes.fullName}>{char.fullName}</div>
                </div>
                <div className={classes.bottom}>
                  <div className={classes.clan}>{char.clanName}</div>
                  <div className={classes.road}>{char.road.name}</div>
                  <div className={classes.generation}>
                    {char.generation} поколение
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Gallery;
