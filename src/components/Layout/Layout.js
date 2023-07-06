import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import classes from "./Layout.module.css";
import scrollImage from "../../assets/scrollarrow.svg";

const Layout = (props) => {
  useScrollToTop();
  const [showButton, setShowButton] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScrollToTop);
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <Fragment>
      <MainHeader />
      <div className={classes.backgroundMap} />
      <main className={classes.layout}>
        <Outlet />
        {props.children}
      </main>
      {showButton && (
        <div onClick={scrollToTopHandler} className={classes.scrollUp}>
          <img src={scrollImage} alt="^" />
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
