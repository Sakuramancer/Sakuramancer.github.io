import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import ScrollToTop from "./ScrollToTop";
import NavigationPanel from "./Navigation/NavigationPanel";
import { getScheme } from "../../utils/schemes";

import classes from "./Layout.module.css";
import palletes from "../../palletes.module.css";

const Layout = (props) => {
  const { pathname } = useLocation();
  const scheme = getScheme(pathname);
  const schemeId = scheme.id;
  const pallete = palletes[schemeId];

  return (
    <div className={[classes.total, pallete].join(" ")}>
      <MainHeader schemeId={schemeId} />
      <div className={classes.backgroundMap} />
      <main id="top" className={classes.layout}>
        <Outlet />
        {props.children}
      </main>
      <ScrollToTop />
      {scheme.showNavigation && <NavigationPanel schemeId={schemeId} />}
    </div>
  );
};

export default Layout;
