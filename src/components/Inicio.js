import React, { useState, useEffect, useReducer } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Line from "./Line";
import EventDetail from "./EventDetail";
import Conflicts from "../data/Conflicts";

const Inicio = () => {
  const [item, setItem] = useState(Conflicts);

  const renderEvent = (props) => {
    console.log(props.match.params.id, Conflicts);
    const foundConflict = Conflicts.find((conflict) => {
      console.log(conflict.id);
      return conflict.id === parseInt(props.match.params.id);
    });
    console.log(foundConflict);
    return <EventDetail conflict={foundConflict} />;
  };

  return (
    <>
      <header>
        <nav className="menu">
          <ul>
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
      <section className="mainList">
        <h1 className="title"> O EcoSocial ten Memoria </h1>
        <Line conflicts={Conflicts} />
        <Switch>
          <Route path="/line/:id" render={renderEvent} />
          {/* <Events conflicts={Conflicts} /> */}
        </Switch>
      </section>
    </>
  );
};

export default Inicio;