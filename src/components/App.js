import React, { useState, useEffect} from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Proxecto from "./Proxecto";
import Contacta from "./Contacta";
import EventDetail from "./EventDetail";
import Conflicts from "../data/Conflicts";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopComponent from "./ScrollToTopComponent";
import ScrollMemory from 'react-router-scroll-memory';


const App = (props) => {
  const [items, setItems] = useState(Conflicts);


  const renderEvent = (props) => {
    const foundConflict = Conflicts.find((conflict) => {
      return conflict.id === parseInt(props.match.params.id);
    });
    console.log(foundConflict);
    return <EventDetail conflict={foundConflict} />;
  };
  return (
    <div>
      <header>
        <nav className="menu">
        <input type="checkbox" id="menu"/>
        <label for="menu"> ☰ </label>
          <ul >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Proxecto">O Proxecto</Link>
            </li>
            <li>
              <Link to="/Contacta">Contacta</Link>
            </li>
          </ul>
        </nav>
        
      </header>
      <ScrollToTopComponent />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Proxecto" component={Proxecto} />
        <Route exact path="/Contacta" component={Contacta} />
        <Route exact path="/line/:id" render={renderEvent} />
        <Route>{"no match"}</Route>
      </Switch>
      
    </div>
  );
};
export default withRouter(App);
