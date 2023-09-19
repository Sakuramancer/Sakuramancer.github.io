import { HashLink } from "react-router-hash-link";
import classes from "./NavigationPanel.module.css";
import TokenSvg from "../svg/TokenSvg";
import { useStorage } from "../../hooks/useStorage";

const NavigationPanel = ({ links }) => {
  const navTokens = useStorage()[0].navTokens;
  const tokens = Object.entries(navTokens).map(([key, item]) => ({
    link: `/sheets/${key}#top`,
    src: (
      <TokenSvg
        className={classes.token_svg}
        mainColor={item.mainColor}
        backColor={item.backColor}
        letter={item.name}
      />
    ),
    tooltip: item.name,
  }));

  return (
    <nav className={classes.panel}>
      <ul>
        {tokens.map((item, index) => (
          <li key={index}>
            <HashLink smooth to={item.link} className={classes.link}>
              <div className={classes.token}>{item.src}</div>
              <span className={classes.tooltip}>{item.tooltip}</span>
            </HashLink>
          </li>
        ))}
        <li className={classes.vertical} />
        {links.map((item, index) => (
          <li key={100 + index}>
            <HashLink smooth to={item.link} className={classes.link}>
              <div className={classes.button}>
                <span className={classes.letter}>{item.src}</span>
              </div>
              <span className={classes.tooltip}>{item.tooltip}</span>
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationPanel;
