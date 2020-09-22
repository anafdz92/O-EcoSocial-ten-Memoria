import React from "react";
import { Link } from "react-router-dom";

const Proxecto = (props) => {
  return (
    <>
      <header className="header">
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
      <p>Este proxecto é resistencia</p>
    </>
  );
};
export default Proxecto;
