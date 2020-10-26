import React, { useState, useEffect, useReducer } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Proxecto from "./Proxecto";
import Contacta from "./Contacta";
import EventDetail from "./EventDetail";
import Conflicts from "../data/Conflicts";
import Line from "./Line";

const App = (props) => {
  const [items, setItems] = useState(Conflicts);

  //EVENT HANDLERS
  // const handleFilter = (data) => {
  //   console.log("manejando los filtros");
  //   //   setFilterContent(data);
  // };

  const handleAnimation = (ev) => {
    console.log("hi");
  };
  //RENDER FILTRADO POR AÑO
  console.log(items);
  // const filteredCharacters = items.filter((item) => {
  //   return item.year.includes(filterContent);
  // });

  //const previousLocation = props.location;

  // const componentWillUpdate = (props) => {
  //   const { location } = props;
  //   if (!(location.state && location.state.modal)) {
  //     previousLocation = props.location;
  //   }
  // };

  // const isModal =
  //   location.state && location.state.modal && previousLocation !== location;

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
    <div>
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
      {/* <Switch location={isModal ? previousLocation : location}> */}
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Proxecto" component={Proxecto} />
        <Route exact path="/Contacta" component={Contacta} />
        <Route exact path="/line/:id" render={renderEvent} />
        <Route>{"no match"}</Route>
      </Switch>
      {/* {isModal ? <Route exact path="/line/:id" render={renderEvent} /> : null} */}
      {/* <footer>
        <p>Holi soy el footer</p>
      </footer> */}
    </div>
  );
};
export default withRouter(App);
