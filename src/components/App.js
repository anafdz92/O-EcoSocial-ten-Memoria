import React from "react";
import { Route, Switch } from "react-router-dom";
import Inicio from "./Inicio";
import Proxecto from "./Proxecto";
import Contacta from "./Contacta";

const App = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Proxecto" component={Proxecto} />
        <Route exact path="/Contacta" component={Contacta} />
      </Switch>
    </>
  );
};
export default App;
