import React, { useState, useEffect } from "react";
import Line from "./Line";
import Events from "./Events";
import EventDetail from "./EventDetail";
import Conflicts from "../data/Conflicts";
//import getDataApi from "../services/getDataApi";

const App = () => {
  const [item, setItem] = useState(Conflicts);

  return (
    <div className="mainList">
      <h1 className="title"> O EcoSocial ten Memoria </h1>
      <Line conflicts={Conflicts} />
      <Events conflicts={Conflicts} />
      <EventDetail />
    </div>
  );
};

export default App;
