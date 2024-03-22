import { useNavigationLinks, useStorage } from "../../../hooks";
import Menu from "./Menu";
import NavigationToken from "./NavigationToken";
import NavigationLink from "./NavigationLink";

import classes from "./NavigationPanel.module.css";

const NavigationPanel = ({ schemeId }) => {
  const links = useNavigationLinks();

  const navTokens = useStorage()[0].navTokens;
  const tokens = Object.entries(navTokens).map(([key, item]) => ({
    link: `/${schemeId}/characters/${key}#top`,
    ...item,
  }));

  return (
    <nav className={classes.panel}>
      <ul>
        <li key="menu">
          <Menu schemeId={schemeId} />
        </li>
        {tokens.map((item, index) => (
          <li key={index}>
            <NavigationToken item={item} />
          </li>
        ))}
        <li className={classes.vertical} />
        {links.map((item, index) => (
          <li key={100 + index}>
            <NavigationLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationPanel;
