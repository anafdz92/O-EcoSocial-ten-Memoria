import React from "react";
import { Link } from "react-router-dom";
import javiota from "./../images/javiota.jpg";

const Proxecto = (props) => {
  return (
    <div className="container">
      <div className="projectContainer">
        <div className="typewriter">
          <h3> O Proxecto</h3>
        </div>
        <div className="quote">
          <p>“Existe un mapa de aldeas esquecidas que morre todas as mañás”.</p>
          <p>Miguel Anxo Fernán Vello.</p>
        </div>
        <div className="imgCont">
          <img src={javiota} alt={"Xosé Suárez"} className="eventImg"></img>
        </div>
        <div className="text">
          <p>
            Este proxecto é unha táctica de resistencia fronte a desmemoria.
          </p>
          <p>
            Un arquivo vivo en torno o que reflectir arredor dos conflictos
            ecolóxicos e sociais que atravesan a nosa história contemporánea.
          </p>
          <p>Unha ollada o pasado para confrontar as loitas do presente.</p>
        </div>
      </div>
    </div>
  );
};
export default Proxecto;
