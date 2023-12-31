import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import MainHeader from "./MainHeader";
import ScrollToTop from "./ScrollToTop";
import NavigationPanel from "./NavigationPanel";
import { useNavigationLinks } from "../../hooks/useNavigationLinks";

import classes from "./Layout.module.css";

const Layout = (props) => {
  const showButton = useScrollToTop();
  const links = useNavigationLinks();

  return (
    <Fragment>
      <MainHeader />
      <div className={classes.backgroundMap} />
      <main id="top" className={classes.layout}>
        <Outlet />
        {props.children}
      </main>
      {showButton && <ScrollToTop />}
      <NavigationPanel links={links} />
    </Fragment>
  );
};

export default Layout;
