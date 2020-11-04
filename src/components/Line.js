import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Line = (props) => {
  const dotList = props.conflicts
    .sort((a, b) => b.year - a.year)
    .map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/line/${item.id}`}>
            <ScrollAnimation animateIn="fadeIn" className="textContainer">
              <time>{item.year}</time>
              <p className="hidden"> {item.name}</p>
              <p className="hidden">{item.location}</p>
              <Link to={`/line/${item.id}`}>
                <button className="buttonPink ">
                  <i class="fas fa-info-circle"></i>
                </button>
              </Link>
            </ScrollAnimation>
          </Link>
        </li>
      );
    });

  return (
    <div className="line">
      <ul className="dotList">{dotList}</ul>
    </div>
  );
};

export default Line;
