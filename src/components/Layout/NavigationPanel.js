import { HashLink } from "react-router-hash-link";
import classes from "./NavigationPanel.module.css";

const NavigationPanel = ({ links }) => {
  return (
    <nav className={classes.panel}>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <HashLink smooth to={item.link} className={classes.link}>
              <div className={classes.button}>{item.src}</div>
              <span className={classes.tooltip}>{item.tooltip}</span>
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationPanel;
