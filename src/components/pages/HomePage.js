import { Fragment, useEffect } from "react";
import Characters from "../Characters/Characters";

const HomePage = (props) => {
  useEffect(() => {
    document.title = "Кампания из Эвенглена";
  }, []);
  return (
    <Fragment>
      <Characters />
    </Fragment>
  );
}

export default HomePage;
