import { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import MainHeader from './MainHeader';
import MapBackground from './MapBackground';
import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <MapBackground />
      <main  className={classes.layout}>
        <Outlet />
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
