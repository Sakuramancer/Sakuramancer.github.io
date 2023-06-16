import { Fragment } from 'react';
import MainHeader from './MainHeader';
import MapBackground from './MapBackground';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <MapBackground />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
