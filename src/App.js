import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <Fragment>
      <Layout>
        <Characters />
      </Layout>
    </Fragment>
  );
}

export default App;
