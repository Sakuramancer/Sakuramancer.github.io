import classes from './MapBackground.module.css';
import mapImage from "../../assets/map.png"

const MapBackground = (props) => {
  return (
    <img
      className={classes.map}
      src={mapImage}
      alt={"Map of Redeya by Sakuramancer"}
    />
  );
};

export default MapBackground;
