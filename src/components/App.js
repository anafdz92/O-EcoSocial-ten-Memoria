import React, { useState } from "react";
import Line from "./Line";
import Events from "./Events";
import Conflicts from "../data/Conflicts";

const App = () => {
  return (
    <div className="mainList">
      <h1 className="title"> O EcoSocial ten Memoria </h1>
      <Line />
      <Events />
    </div>
  );
};

export default App;
