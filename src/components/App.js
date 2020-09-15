import React, { useState } from "react";
import Line from "./Line";
import Events from "./Events";
import Conflicts from "../data/Conflicts";

const App = () => {
  return (
    <div className="mainList">
      <Line />
      <Events />
    </div>
  );
};

export default App;
